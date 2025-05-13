### This is the starter template of Node.js for building backend


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


