# library

my-library

Application is divided into 2 parts

1. server
2. client

## server

In the application folder you can run

### npm install

This will install all the dependencies for the server app

### node server.js

Go to the server folder in your terminal and run the above command to run just the server

### Configurations

Server IP and port configurations can be changed in the config.json file

## Setting up environment variables

1. create a .env file in server folder
2. Set up goodreads configuration data as follows :

   1. GOODREADS_DEV_KEY
   2. GOODREADS_DEV_SECRET
   3. GOODREADS_USER_ID
   4. GOODREADS_VERSION
   5. PER_PAGE

## client

In the application folder you can run

### npm install

This will install all the dependencies for react app

### npm start

This will start the server and client concurrently

server will start at the port : 4500
client will start at the port : 3000
