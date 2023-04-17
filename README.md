# adonis-postgres-crud
An example of a backend with API and a PostgreSQL DB using Adonis.js


Instructions:
- clone the repo
- create a local db with postgres
- modify .env file and database.ts with your local postgres db (name, user and password)
- install with npm i
- start with node ace serve --watch
- now you have to start migrations with node ace migration:run
- now if you want you can fill the db using node ace db:seed
- end

Now you can see the json data as response using the paths included in routes.ts
