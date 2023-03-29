# Yojoa Remote Sensing - Secchi

This repository contains code to support a project led by Jemma Fadum and is based on the work she did in her dissertation, 'INTRA AND INTER-ANNUAL PATTERNS IN LAKE YOJOA, HONDURAS: DISENTANGLING BIOGEOCHEMICAL DRIVERS OF A TROPICAL MONOMICTIC LAKE ECOSYSTEM'. This repository of code is the start of a re-analysis of the results presented in chapter 5, 'REMOTE SENSING OF TROPHIC STATE IN LAKE YOJOA; A SUMMARY OF FUTURE OUTLOOKS AND OPPORTUNITIES', but updated to include Landsat missions 4 & 9 in addition to the original Landsat 5, 7, & 8 and to move all code and data to the Landsat Collection 2 dataset.

The Landsat record was last acquired in February of 2023 by B. Steele using the code in the subdirectory 'landsat_c2'.

# Folders

`data` this is a symlink folder that houses all of the data referenced in these scripts. See notes at the bottoms of this readme for creating your own symlink folder. The subdirectories of this folder should read: fromDrive, upstreamRS, matchups, models, output, in-situ.

`programs` contains the scripts that perform post-processing and collation of the GEE ouput from the `landsat_c2` folder. 

`landsat_c2` contains the scripts used to run the GEE commands and pull the stacks. The raw output of these scripts have been saved in the `data/fromDrive` folder, which are copies from B's Google Drive.

# Setting up the data symlink

Link the applicable OneDrive folder to the `data` folder in the primary directory - your link will be different than the one in the folder. To link your data folder (basically a fancy shortcut), follow the instructions below where the code blocks are executed in the terminal. 

> [WINDOWS](https://winaero.com/sync-any-folder-onedrive-windows-10/): 
>
>     mklink /j “where\you\want\it” “where\it\lives\on\OneDrive”
>
> KATIE'S EXAMPLE: 
>
>     mklink /j "C:\Users\katie\Documents\0_My_Git\nps_water_vulnerability\data" "C:\Users\katie\OneDrive - Colostate\nps_water_vulnerability\data"
>
> [MAC OS](https://apple.stackexchange.com/a/259804): 
>
>     ln -s “where\it\lives\on\OneDrive” “where\you\want\it”
>
> Matt's example: 
>
>     ln -s "/Users/mbrousil/OneDrive - Colostate/aquasat_v2/data" "/Users/mbrousil/Documents/aquasat_v2/data"
>
> **NOTE FOR MAC USERS: This will likely prompt you to enter your password that you use to log on to your computer.**
