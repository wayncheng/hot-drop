
# API Documentation

### Markers `/api/mark`

#### GET Markers

- All markers in database
	- GET `/api/mark/all`

- For a given bus angle 
	- `/api/mark/angle/:angle?`

- For a given path ID 
	- `/api/mark/:path_id?`



#### POST Markers

- Save new marker to database
	- `POST /api/mark/save`


#### GET Paths

- Get all paths
	- `GET /api/path/all`
- Get a new random path
	- `GET /api/path/random/:currentPathID?`
- Get quantity of paths in database
	- `GET /api/path/count`
- Get path data by path ID
	- `GET /api/path/id/:path_id`
- Get path data by path angle
	- `GET /api/path/angle/:angle`



