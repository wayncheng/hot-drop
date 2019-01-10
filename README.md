# Fortnite Hot Drop

##### by Wayne Cheng





## How to View the Heat Maps

Move the slider at the bottom of the screen to change the angle of the bus. The corresponding heat map will appear once you release the slider.

**Check out the maps here: [fortnitedrops.us/heatmap](https://fortnitedrops.us/heatmap)**



## Samples

![Fortnite heat map preview](https://imgur.com/e9EfaDm.png)





![Fortnite heat map with custom colors](https://imgur.com/udLcCf5.png)





![Fortnite heat map with individual player view](https://imgur.com/hqMZ2Ts.png)





## Customization Features

*Customize the heat map's appearance by clicking the gear in the top-left corner.* 



### Custom Colors

If you’re having a hard time seeing the default colors or just think they’re ugly, you can set your own colors for "cold" and "hot" areas on the map. Valid color formats include:

- `#ffffff, rgb(), rgba(), hsl(), hsla()`
- [Predefined CSS color names](https://www.w3schools.com/colors/colors_names.asp) (e.g. `red` or `pink`)



### Individual Player View

Enable a view that shows the exact position of each individual player on the map. If you start experiencing degraded performance, try turning this feature off.



## Future work

- draw path and search for closest match
- group adjacent bins to get subtotals
- subtotals for named/popular locations
- bin size customization
- responsive bin sizes for mobile/smaller screens
- general heat map visual improvements





------

#### Quick Start (local)

##### * Database credentials are not provided to the public. To play around with the app, you will have to configure your own server.

In the root of the repository, run the following commands to run the app locally:

1. Install 2 Sets of Dependencies ( Server & React Client ) :    

```
	// 1. Install server dependencies
	// 2. Change to client directory
	// 3. Install React client dependencies

	yarn install
	cd client
	yarn install

```


2. Start both servers and launch the app

```
	yarn dev
```