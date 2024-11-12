# fivem-greenscreener (for Time2RP)

## Usage
### Screenshot all clothing
Execute the command `/screenshot` to initiate the clothing screenshot process.
Be patient as it may take some time to complete, and it's advisable not to interfere with your PC during this operation.


### Screenshot specific clothing
Utilize the command `/customscreenshot` to capture a specific clothing item, with optional custom camera settings specified in the format outlined in `config.json`.

`/customscreenshot [component] [drawable/all] [props/clothing] [male/female/both] [camerasettings(optional)]`

`/customscreenshot 11 17 clothing male {"fov": 55, "rotation": { "x": 0, "y": 0, "z": 15}, "zPos": 0.26}`

`/customscreenshot 11 all clothing male {"fov": 55, "rotation": { "x": 0, "y": 0, "z": 15}, "zPos": 0.26}`


### Screenshot objects/props
To screenshot objects or props, employ the command `/screenshotobject [hash]`.

Example Usage:
`/screenshotobject 2240524752`

### Screenshot vehicles
Capture screenshots of vehicles using `/screenshotvehicle [model/all] [primarycolor(optional)] [secondarycolor(optional)]`.

Example Usage:
`/screenshotvehicle all 1 1`

`/screenshotvehicle zentorno 1 1`
