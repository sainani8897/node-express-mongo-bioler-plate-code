const express = require("express");
const { port } = require('./config/config');
const app = express();
const routes = require("./routes");
const models = require("./database/Models");
const { connectDb } = require("./database/config");


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
