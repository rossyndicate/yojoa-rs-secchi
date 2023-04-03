# Yojoa Remote Sensing - Secchi

This repository contains code to support a project led by Jemma Fadum and is based on the work she did in her dissertation, 'INTRA AND INTER-ANNUAL PATTERNS IN LAKE YOJOA, HONDURAS: DISENTANGLING BIOGEOCHEMICAL DRIVERS OF A TROPICAL MONOMICTIC LAKE ECOSYSTEM'. This repository of code is the start of a re-analysis of the results presented in chapter 5, 'REMOTE SENSING OF TROPHIC STATE IN LAKE YOJOA; A SUMMARY OF FUTURE OUTLOOKS AND OPPORTUNITIES', but updated to include Landsat missions 4 & 9 in addition to the original Landsat 5, 7, & 8 and to move all code and data to the Landsat Collection 2 dataset.

The Landsat record was last acquired in March of 2023 by B. Steele using the code in the subdirectory 'landsat_c2'.

Note, this project is still under development. Data specific to this analysis are housed in CSU OneDrive folders and may not be 100% reproducible at this time. The data will be made available at or before the time of publication. If you require access to data prior to it being made public, please contact @matthewross07.

### Suggested citations for datasets/code used in this workflow:

-   Yang, Xiao. (2020). Deepest point calculation for any given polygon using Google Earth Engine JavaScript API (Version v2). Zenodo. <https://doi.org/10.5281/zenodo.6341960>

-   Muñoz Sabater, J., (2019): ERA5-Land daily averaged data from 1981 to present. Copernicus Climate Change Service (C3S) Climate Data Store (CDS). (2023-03-30).

-   Messager, M.L., Lehner, B., Grill, G., Nedeva, I., Schmitt, O. (2016). Estimating the volume and age of water stored in global lakes using a geo-statistical approach. Nature Communications, 7: 13603. <https://doi.org/10.1038/ncomms13603>

# Overaching workflow

If you are reproducing this analysis from start to finish from scratch, the general workflow is:

1) run the scripts in the `GEE_scripts` folder in the Google Earth Engine's UI to acquire the ERA5 data and to calculate the Chebyshev centers of the lake polygons for Guatemala, Honduras, and El Salvador
2) acquire the Landsat stack data from GEE for specific points -- this is the `landsat_c2/literateCode` and `landsat_c2/forHandoffs` subdirectories. You only need to run the `.Rmd` scripts in these subdirectories, and they can be run in any order.
3) Run the scripts in the `programs` subdirectory in the numbered order of the scripts. 

Much of the code in this repository was adapted from the repo [ROSSyndicate/ROSS_RS_mini_tools](https://github.com/rossyndicate/ROSS_RS_mini_tools) - and has been focused for the purposes of this project. You may wish to start at the ROSS_RS_mini_tools repo if you are adapting this code base for a different location/purpose. 

# Folders

`data` this is a symlink folder that houses all of the data referenced in these scripts. See notes at the bottoms of this readme for creating your own symlink folder. The subdirectories of this folder should read `fromDrive`, `upstreamRS`, `matchups`, `in-situ`, etc. for the scripts in this repository to work as written.

`programs` contains the scripts that perform post-processing and collation of the GEE ouput from the `landsat_c2` folder.

`landsat_c2` contains the scripts used to run the GEE commands and pull the stacks. The raw output of these scripts have been saved in the `data/fromDrive` folder, which are copies from B's Google Drive. Also included in this directory are the scripts to gather regional LS stacks to create regional handoff coefficients.

`GEE_scripts` contains two scripts: one is the `era5_download`, which uses GEE to acquire the ERA5 modeled data for Yojoa and `guat_elsal_hon_getCenters`, which grabs the Chebyshev centers of all lakes greater than 25 ha in Guatemala, El Salvador, and Honduras.

# Setting up the `data` folder symlink

Link the applicable OneDrive folder to the data folder in the primary directory - your link will be different than the one in the folder (i.e., consider the data folder in this repository a placeholder). To link your data folder (basically a fancy shortcut), follow the instructions below where the code blocks are executed in the terminal.

> [WINDOWS](https://winaero.com/sync-any-folder-onedrive-windows-10/): 
>
> ```         
> mklink /j “where\you\want\it” “where\it\lives\on\OneDrive”
> ```
>
> KATIE'S EXAMPLE: 
>
> ```         
> mklink /j "C:\Users\katie\Documents\0_My_Git\nps_water_vulnerability\data" "C:\Users\katie\OneDrive - Colostate\nps_water_vulnerability\data"
> ```
>
> [MAC OS](https://apple.stackexchange.com/a/259804): 
>
> ```         
> ln -s “where\it\lives\on\OneDrive” “where\you\want\it”
> ```
>
> Matt's example: 
>
> ```         
> ln -s "/Users/mbrousil/OneDrive - Colostate/aquasat_v2/data" "/Users/mbrousil/Documents/aquasat_v2/data"
> ```
>
> **NOTE FOR MAC USERS: This will likely prompt you to enter your password that you use to log on to your computer.**
