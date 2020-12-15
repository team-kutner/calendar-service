# Aquabnb calendar service

> This is the booking and calendar module for Aquabnb. Original project can be found here: https://github.com/teamTarly/aquabnb-booking. The goal of the current project is to scale and redesign the back-end server and database of the original project to optimize for high web traffic.

## Related Projects

  - https://github.com/kutner/photo_carousel-service
  - https://github.com/kutner/more-places-stay-service
  - https://github.com/teamTarly/aquabnb-booking
  - https://github.com/kutner/reviews-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [API](#API)
1. [Development](#development)

## Usage

> To see how to get started with this repo see below in development.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

# API
### Listings
Action | Method | URL
-------|--------|----
Create a listing | POST | /api/homes/create/listing
Get a booked dates for a listing | GET | /api/homes/:id/listing
Update a listing | PUT | /api/homes/:id/:column/listing
Delete a listing | DELETE | /api/homes/:id/listing

### Reservations
Action | Method | URL
-------|--------|----
Create a reservation | POST | /api/homes/create/reservation
Get listing details for a reservation | GET | /api/homes/:id/reservation
Update a reservation | PUT | /api/homes/:id/:column/reservation
Delete a reservation | DELETE | /api/homes/:id/reservation

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
npm install nodemon
```

### Database:
This service uses postgresql.

## Caching:
This service uses redis for caching recently retrieved data. In production this retrieval is done by the proxy server to reduce network requests. As such get requests to redis have been commented out in the reservations and listings models. In order to run the service on it's own, with caching uncomment these lines out in the model. Otherwise, it will be assumed that all get requests to the cache will be handled on the proxy.

#### Instructions:
Seeding DB: First install postgres and create a table called booking. Then run the postgres_schema_nofk.sql file to create two tables. Seed tables using csv scripts below and copy command in psql shell.

Connecting DB: use env command below to create an env file. Add PGUSER, PGHOST, PGPASSWORD, PGDATABASE, PGPORT to env file. If you get errors with password authentication run this command from within the psql shell:
ALTER USER postgres PASSWORD 'newPassword';
Then add that password to your env file.

### Client:
This service uses React v. 16.

### Server:
This service uses node express.
Default server port is 3000. To modify add PORT to .env file.

### Scripts:
npm start:dev: Runs the server with nodemon
npm run dev: Builds webpack in developer mode with watch tag
npm run build: Builds webpack using development mode
npm run seed:mysql Creates mysql database and tables (if they don't exist) and also seeds the databse with mock data with 100 entries
npm test: Runs jest tests
npm test:watch: Runs jest tests with watch tag
npm run create-tables:pg: Creates two postgres tables (listings, reservations)
npm run csv:pgl: Creates a csv file with 10 million records that can be     added to pg listings table
npm run csv:pgr: creates a csv file with 10 million records that can be     added to pg reservations table
npm run env: creates a .env file to define process.env variables for set up to pg server
npm run build:prod: Build webpack using production mode

### Dependencies:
babel
axios
body-parser
classnames
express
faker
moment
moment-random
mysql
mysql2
react
react-dom
styled-components
superagent
supertest

devDependencies:
@babel/cli
@babel/core
@babel/plugin-proposal-class-properties
@babel/plugin-transform-react-jsx
@babel/preset-env
@babel/preset-react
babel-jest
babel-loader
enzyme
enzyme-adapter-react-16
enzyme-to-json
jest
webpack
webpack-cli


