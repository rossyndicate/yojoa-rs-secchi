# Landsat C2 Stack Pulls

These scripts function as the primary R-user-friendly version of the Landsat Collection 2 workflows for the ROSS lab. These files are meant to function as building blocks, where you can use some or all to create a dataset. These scripts have been modified for use on the Yojoa project.

## Folder/file descriptions:

* literateCode:

When using these scripts, you must run them in the 'landsat_c2.RProj' file. If you run into issues with either gcloud or the ee module, see the 'CommonIssues.md' file in the 'helps' directory of the [ROSSyndicate/ROSS_RS_mini_tools](https://github.com/rossyndicate/ROSS_RS_mini_tools) repository.

    -  LandsatC2_M4-7_SurfaceRefTempStacks.rmd: level 2 surface reflectance and surface temperature stack pull for Landsat Collection 2 missions 4-7

    -  LandsatC2_M8-9_SurfaceRefTempStacks.rmd: level 2 surface reflectance and surface temperature stack pull for Landsat Collection 2 missions 8 and 9

    -  pySetup.R: script that uses the `reticulate` package to set up a reproducible python environement compatible with R
 
