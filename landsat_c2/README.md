# landsat_c2: Landsat C2 Stack Pulls

These scripts function as the primary R-user-friendly version of the Landsat Collection 2 workflows for the ROSS lab. These files are meant to function as building blocks, where you can use some or all to create a dataset. These scripts have been modified for use on the Yojoa project.
A few notes about the collated/filtered/matchup data sets:

-   There are negative reflectance values in these data sets. Due to the updated storage of surface reflectance in Collection 2, we do not recommend throwing out any of the negative values at this time in algorithm development. It is likely that we will recommend a filter in the future for negative reflectance values that are unrealistic, but for now, please include them in your development.

-   The surface temp data doesn't look great for Yojoa. There are likely two main reasons for this:

    1)  [Landsat 9 TIRS band has some anomalous data](https://www.usgs.gov/landsat-missions/news/recent-landsat-9-tirs-anomaly-pauses-processing-new-landsat-9-datahttps://www.usgs.gov/landsat-missions/news/recent-landsat-9-tirs-anomaly-pauses-processing-new-landsat-9-data) being reported at this time

    2)  The surface temperature product validation is completed almost entirely with buoy data from North America in oceanic environments and little rigorous validation of site-specific data has been done (see also [Herrick and Steele, et al. 2023](https://esajournals.onlinelibrary.wiley.com/doi/full/10.1002/ecs2.4357))


## Folder/file descriptions:

* literateCode:

When using these scripts, you must run them in the 'yojoa-rs-secchi.RProj' file. If you run into issues with either gcloud or the ee module, see the 'CommonIssues.md' file in the 'helps' directory of the [ROSSyndicate/ROSS_RS_mini_tools](https://github.com/rossyndicate/ROSS_RS_mini_tools) repository.

    -  LandsatC2_M4-7_SurfaceRefTempStacks.rmd: level 2 surface reflectance and surface temperature stack pull for Landsat Collection 2 missions 4-7

    -  LandsatC2_M8-9_SurfaceRefTempStacks.rmd: level 2 surface reflectance and surface temperature stack pull for Landsat Collection 2 missions 8 and 9

    -  pySetup.R: script that uses the `reticulate` package to set up a reproducible python environement compatible with R
 
* forHandoffs:

These are the same scripts as above, but they use the regional center locations to pull stacks for the regional handoff coefficients.
