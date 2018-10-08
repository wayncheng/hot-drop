# Fortnite Drop Data

#### by Wayne Cheng


### Quick Start (local)

------

In the root of the repository, run the following commands to run the app locally:

1. Install dependencies :    **`yarn install`** or **`npm install`**
2. Start the app:    **`yarn start`** or  **`npm start



---

## API

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



