# Yojoa Remote Sensing - Secchi

This repository contains code to support a project led by Jemma Fadum and is based on the work she did in her dissertation, 'INTRA AND INTER-ANNUAL PATTERNS IN LAKE YOJOA, HONDURAS: DISENTANGLING BIOGEOCHEMICAL DRIVERS OF A TROPICAL MONOMICTIC LAKE ECOSYSTEM'. This repository of code is the start of a re-analysis of the results presented in chapter 5, 'REMOTE SENSING OF TROPHIC STATE IN LAKE YOJOA; A SUMMARY OF FUTURE OUTLOOKS AND OPPORTUNITIES', but updated to include Landsat missions 4 & 9 in addition to the original Landsat 5, 7, & 8 and to move all code and data to the Landsat Collection 2 dataset.

The Landsat record was last acquired in March of 2023 by B. Steele using the code in the subdirectory 'landsat_c2'.

# Overaching workflow

If you are reproducing this analysis from start to finish from scratch, the general workflow is:

1)  run the scripts in the `GEE_scripts` folder in the Google Earth Engine's UI to acquire the ERA5 data and to calculate the Chebyshev centers of the lake polygons for Guatemala, Honduras, and El Salvador
2)  acquire the Landsat stack data from GEE for specific points -- this is the `landsat_c2/literateCode` and `landsat_c2/forHandoffs` subdirectories. You only need to run the `.Rmd` scripts in these subdirectories, and they can be run in any order.
3)  Run the scripts in the `programs` subdirectory in the numbered order of the scripts. All scripts within this folder should be fully-reproducible within the associated yojoa-rs-secchi.Rproj file.

Much of the code in this repository was adapted from the repo [ROSSyndicate/ROSS_RS_mini_tools](https://github.com/rossyndicate/ROSS_RS_mini_tools) - and has been focused for the purposes of this project. You may wish to start at the ROSS_RS_mini_tools repo if you are adapting this code base for a different location/purpose.

# Folders

`data` contains all data that are used within the `landsat_c2` scripts and the `programs` scripts.

`GEE_scripts` contains two scripts: one is the `era5_download`, which uses GEE to acquire the ERA5 modeled data for Yojoa and `guat_elsal_hon_getCenters`, which grabs the Chebyshev centers of all lakes greater than 25 ha in Guatemala, El Salvador, and Honduras.

`landsat_c2` contains the scripts used to run the GEE commands and pull the stacks. The raw output of these scripts have been saved in the `data/fromDrive` folder, which are copies from B's Google Drive. Also included in this directory are the scripts to gather regional LS stacks to create regional handoff coefficients.

`programs` contains the scripts that perform post-processing and collation of the GEE ouput from the `landsat_c2` folder.
