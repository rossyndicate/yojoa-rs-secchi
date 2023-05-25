# yojoa-rs-secchi/data

This subdirectory houses data for the Yojoa project. 

## Folder descriptions

* era5_met: these are data that were acquired/created using the scripts `GEE_scripts/era5_download.js` and `programs/2_Process_Summarize_ERA5.Rmd`

* fromDrive: these are copies of the output from the GEE stack scripts in the `landsat_c2` folder.

* in-situ: these are data originating from Jemma/Ed 

* matchups: these are matchup datasets created in the script `programs/7_LSC2_secchi_matchup.Rmd`

* shapefiles: these are shapefiles and spatial data used to create the regional dataset. Shapefile generation was completed using QGIS-LTR 3.22 and the HydroLakes data base. The .csv file here `guat_hon_elsal_cetners_gt25.csv` is the output of the GEE script `GEE_scripts/guat_elsal_hon_getCenters.js`

* upstreamRS: these are the collation of all data for Yojoa and the Regional analysis, in order of creation

    * '_ collated _' files: data from all stacks, no filtering applied
    
    * '_ filtered _' files: the dataset that have been filtered for image quality, reasonable water pixel values (-0.01 to 0.2 Rrs in any given band), and at least 10 pixels considered 'high likelihood water' according to the DSWE algorithm (aka, dswe = 1).

    * 'yojoa_regional_handoff_coefficients...': this file was exported from the script `programs/4_regional_handoff_calcs.Rmd` and contains the coefficients to correct LS5, LS8 and LS9 to values relative to LS7.

    * 'yojoa_C2_SR_rrs_corr...': this file contains only median band values and scene/location metadata, where all band values are correctected to values relative to Landsat 7. (Landsat 7 _corr values are the same as non-corr values.)

    * 'yojoa_corr_rrs_met...': this file is the primary file for model application - it has corrected median values, ERA5 summary values and scene/location metadata.