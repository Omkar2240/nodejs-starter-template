### This is the starter template of Node.js for building backend

`src` --> Inside the src folder, all the source code of the project will reside, this will not include any kind of tests (You might need to create separate folder for tests)

Let's take a look inside the `src` folder:

- `config` --> In this folder, everything and anything related to configurations or setup of library or module will be done. For example: setting up dotenv for loading the environment variables in `server-config.js` file. One more example can be to setup the logging library that can help to prepare meaningdul logs.

- `routes` --> In the routes folder, we register a route and the corresponding middlewares and controllers to it.

- `middlewares` --> Middlewares process incoming requests before they reach their final destination and handle outgoing requests before they sent back to the client. they are just going to interscept the incoming requests where we can write our validators, autheicators, etc. Middlewares is use for protecting the any route.

## Setup the project

- Clone the repo or download the repo
- In the server directory create `.env` file and add the following env variables
  ```
    PORT=<Your choice of port>
  ```
  ex:
  ```
     3000
  ``` 
- Go inside the `src` folder and run the following command:
``` 
 npx sequelize init
```  
- By using the above command, you will get migrations and seeders folder, along with config.json file inside the config folder.
- If you're using development environment, then write name and password of your database and in dialect mention whatever db you're using for ex: mysql, mariadb, etc.
- If you're setting up test or production environment, make sure you also replace the host with the hosted db url.

- To run the server, execute the following command:

```
npm run dev
```  


