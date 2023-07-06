# Yojoa Remote Sensing - Secchi

This repository contains code to support a project led by Jemma Fadum and is 
based on the work she did in her dissertation, 'INTRA AND INTER-ANNUAL PATTERNS 
IN LAKE YOJOA, HONDURAS: DISENTANGLING BIOGEOCHEMICAL DRIVERS OF A TROPICAL 
MONOMICTIC LAKE ECOSYSTEM'. This repository of code is the re-analysis of the 
results presented in chapter 5, 'REMOTE SENSING OF TROPHIC STATE IN LAKE YOJOA; 
A SUMMARY OF FUTURE OUTLOOKS AND OPPORTUNITIES', but updated to include Landsat 
mission 9 in addition to the original Landsat 5, 7, & 8 and to move all code and 
data to the Landsat Collection 2 dataset.

The Landsat record was last acquired in March of 2023 by B. Steele using the 
code in the subdirectory 'landsat_c2'.

Verbose methodology is provided in the Methods file in this folder. The Method 
file is present as both a .Rmd and a .html file. Download the repository in order 
to view the .html in its full glory.

# Overaching workflow

If you are reproducing this analysis from start to finish from scratch, the 
general workflow is:

1)  run the scripts in the `GEE_scripts` folder in the Google Earth Engine's 
UI to acquire the ERA5 data and to calculate the Chebyshev centers of the lake 
polygons for Guatemala, Honduras, and El Salvador
2)  acquire the Landsat stack data from GEE for specific points -- this is the 
`landsat_c2/literateCode` and `landsat_c2/forHandoffs` subdirectories. You only 
need to run the `.Rmd` scripts in these subdirectories, and they can be run in 
any order.
3)  Run the scripts in the `programs` subdirectory in the numbered order of the 
scripts. All scripts within this folder should be fully-reproducible within the 
associated yojoa-rs-secchi.Rproj file.

Much of the code in this repository was adapted from the repo [ROSSyndicate/ROSS_RS_mini_tools](https://github.com/rossyndicate/ROSS_RS_mini_tools) 
- and has been focused for the purposes of this project. You may wish to start 
at the ROSS_RS_mini_tools repo if you are adapting this code base for a 
different location/purpose.

Note, you do not have to re-run the GEE acquisition steps in order to run the 
workflow in the `programs` folder. Files that are created in the first three 
scripts of the workflow are stored in the folder `data/upstreamRS`, which means 
that the workflow can be run from step 4 without any changes to the repository 
or re-running previous scripts.

# Folders

`data` contains all data that are used within the `landsat_c2` scripts and the 
`programs` scripts.

`GEE_scripts` contains two scripts: one is the `era5_download`, which uses GEE 
to acquire the ERA5 modeled data for Yojoa and `guat_elsal_hon_getCenters`, which 
grabs the Chebyshev centers of all lakes greater than 25 ha in Guatemala, El 
Salvador, and Honduras.

`landsat_c2` contains the scripts used to run the GEE commands and pull the 
stacks. The raw output of these scripts have been saved in the `data/fromDrive` 
folder, which are copies from B's Google Drive. Also included in this directory 
are the scripts to gather regional LS stacks to create regional handoff coefficients.

`programs` contains the scripts that perform post-processing and collation of 
the GEE ouput from the `landsat_c2` folder.
