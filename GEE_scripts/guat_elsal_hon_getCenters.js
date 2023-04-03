//adapted from Xiao 2020
// citation:
//Yang, Xiao. (2020). Deepest point calculation for any given polygon using Google Earth Engine JavaScript API (Version v2). Zenodo. https://doi.org/10.5281/zenodo.6341960

var yojoa = ee.FeatureCollection('projects/ee-steelebcsu/assets/hon_gtm_els_HydroLakes_gt25ha');

var getUTMProj = function(lon, lat) {
  // see https://apollomapping.com/blog/gtm-finding-a-utm-zone-number-easily and
  // https://sis.apache.org/faq.html
  var utmCode = ee.Number(lon).add(180).divide(6).ceil().int();
  var output = ee.Algorithms.If(ee.Number(lat).gte(0),
  ee.String('EPSG:326').cat(utmCode.format('%02d')),
  ee.String('EPSG:327').cat(utmCode.format('%02d')));
  return(output);
};

var GetLakeCenters = function(feature) { //, scale) {
  // calculate the deepest point for the inpout polygon (or multipolygon)
  // for each input, export the deepest point and its distance to shore.
  var polygon = feature.geometry();
  //var ct = polygon.centroid(scale);
  var ct = polygon.centroid(100);
  
  var id = feature.get('Hylak_id')
  
  var utmCode = getUTMProj(ct.coordinates().getNumber(0), ct.coordinates().getNumber(1));

  var polygonImg = ee.Image.constant(1).toByte().paint(ee.FeatureCollection(ee.Feature(polygon, null)), 0);

  var dist = polygonImg.fastDistanceTransform(2056).updateMask(polygonImg.not())
  .sqrt().reproject(utmCode, null, 100).multiply(100); // convert unit from pixel to meter

  var maxDistance = dist.reduceRegion({
    reducer: ee.Reducer.max(),
    geometry: polygon,
    scale: 100,
    bestEffort: true,
    tileScale: 1
  }).getNumber('distance');

  var outputDp = ee.Feature(dist.addBands(ee.Image.pixelLonLat()).updateMask(dist.gte(maxDistance))
  .sample(polygon, 100).first());
  var dp = ee.Geometry.Point([outputDp.get('longitude'), outputDp.get('latitude')]);
  
  var lat = outputDp.get('latitude');
  var lon = outputDp.get('longitude');

  var regions = ee.FeatureCollection([ee.Feature(dp, {'type': 'dp'})]);

  var output = dist.sampleRegions({
    collection: regions,
    properties: ['type'],
    scale: 100,
    tileScale: 1,
    geometries: true});

  return(ee.Feature(output.first())
    .set({'Hylak_id': id,
          'Latitude': lat,
          'Longitude': lon}))
};

var centers = yojoa.map(GetLakeCenters);

Map.centerObject(yojoa);
Map.addLayer(yojoa);

Map.addLayer(centers.aside(print));

Export.table.toDrive({
  collection: centers, 
  description: 'guat_hon_elsal_centers_gt25', 
  folder: 'yojoa', 
  fileFormat: 'csv'
});