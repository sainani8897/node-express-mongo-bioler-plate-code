const express = require("express");
const Routes = express.Router();

const users = require("./users");

/** Home Route */
Routes.get('/', function (req, res) {
    res.send('Home api page')
})

/** Routes Users  */
Routes.use("/users",users);

module.exports = Routes;



