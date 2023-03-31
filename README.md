# Yojoa Remote Sensing - Secchi

This repository contains code to support a project led by Jemma Fadum and is based on the work she did in her dissertation, 'INTRA AND INTER-ANNUAL PATTERNS IN LAKE YOJOA, HONDURAS: DISENTANGLING BIOGEOCHEMICAL DRIVERS OF A TROPICAL MONOMICTIC LAKE ECOSYSTEM'. This repository of code is the start of a re-analysis of the results presented in chapter 5, 'REMOTE SENSING OF TROPHIC STATE IN LAKE YOJOA; A SUMMARY OF FUTURE OUTLOOKS AND OPPORTUNITIES', but updated to include Landsat missions 4 & 9 in addition to the original Landsat 5, 7, & 8 and to move all code and data to the Landsat Collection 2 dataset.

The Landsat record was last acquired in March of 2023 by B. Steele using the code in the subdirectory 'landsat_c2'.

### Suggested citations for datasets/code used in this workflow:

-   Yang, Xiao. (2020). Deepest point calculation for any given polygon using Google Earth Engine JavaScript API (Version v2). Zenodo. <https://doi.org/10.5281/zenodo.6341960>

-   Muñoz Sabater, J., (2019): ERA5-Land daily averaged data from 1981 to present. Copernicus Climate Change Service (C3S) Climate Data Store (CDS). (2023-03-30).

-   Messager, M.L., Lehner, B., Grill, G., Nedeva, I., Schmitt, O. (2016). Estimating the volume and age of water stored in global lakes using a geo-statistical approach. Nature Communications, 7: 13603. <https://doi.org/10.1038/ncomms13603>

# Folders

`data` this is a symlink folder that houses all of the data referenced in these scripts. See notes at the bottoms of this readme for creating your own symlink folder. The subdirectories of this folder should read `fromDrive`, `upstreamRS`, `matchups`, `in-situ`, etc. for the scripts in this repository to work as written.

`programs` contains the scripts that perform post-processing and collation of the GEE ouput from the `landsat_c2` folder.

`landsat_c2` contains the scripts used to run the GEE commands and pull the stacks. The raw output of these scripts have been saved in the `data/fromDrive` folder, which are copies from B's Google Drive. Also included in this directory are the scripts to gather regional LS stacks to create regional handoff coefficients.

`GEE_scripts` contains two scripts: one is the `era5_download`, which uses GEE to acquire the ERA5 modeled data for Yojoa and `guat_elsal_hon_getCenters`, which grabs the Chebyshev centers of all lakes greater than 25 ha in Guatemala, El Salvador, and Honduras.

# Setting up the `data` folder symlink

Link the applicable OneDrive folder to the `data` folder in the primary directory - your link will be different than the one in the folder. To link your data folder (basically a fancy shortcut), follow the instructions below where the code blocks are executed in the terminal.

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
