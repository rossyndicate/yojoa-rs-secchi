// ERA5 data download script for yojoa

var lat = 14.8768;
var lon = -87.9791;

var loc = ee.Geometry.Point(lon, lat);

var era5 = ee.ImageCollection('ECMWF/ERA5/DAILY')
  .filterBounds(loc);
  
// Sample the image at the point
function era5_summary(image) {
  var reduced = image.reduceRegions({
    reducer: ee.Reducer.mean(),
    collection: loc,
    scale: era5.first().projection().nominalScale()
  });
  return reduced;
}

var era5_reduced = era5.map(era5_summary).flatten();

Export.table.toDrive({
  collection: era5_reduced,
  description: 'yojoa_era5_data',
  folder: 'era5',
  fileFormat: 'CSV'
});
