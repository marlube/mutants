# WELCOME TO MUTANTS API 

This is a project created in NodeJS `version v16.13.1`, their achieve it is to identify mutants according to a DNA string input. The application have a Firebase DB and it's hosted with Google App Engine

## Adding database configuration 

You need to download a `config-db` file that I will send you with the credentials to complete the database connection, when you downloaded you should add it to db folder, and that way the project going to run perfectly and you will get information from Firebase DB

## Available Scripts

In the project directory, you can run:

### `npm install`

With this command, you can install the all dependencies that are necessary to execute the API.

### `npm run start`

This command executes the API, and will give you the `/mutant` service to identify Mutants. 

## Setting PORT environment variable

If you want to run the API in a specific port, you should create a `.env` file, and within it setting the environment variable `PORT`, this way you can run the API in the port that you want.

## Consume endpoints from cloud hosting 

If you want to consume the endpoints without install the project in your local, you can consume the endpoints of the next way

POST https://cedar-catfish-337305.ue.r.appspot.com/mutant sending dna in the body request
GET https://cedar-catfish-337305.ue.r.appspot.com/stats

The app is hosted with Google App Engine and their database was created in Firebase

