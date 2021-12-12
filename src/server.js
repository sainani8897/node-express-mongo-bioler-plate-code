const express = require("express");
const { port } = require('./config/config');
const app = express();
const routes = require("./routes");
const models = require("./database/Models");
const { connectDb } = require("./database/config");



/** Body Parser */
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded  

/** Intilizing the routes here */
app.use("/", routes);

/**
 * Server Starting at Port 
 * 
 */
connectDb()
  .then(async () => {
    app.listen(port, () => {
      console.log(` Server Started Running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Could not Able to connent to DB! Server not Started!");
  });
