const express = require("express");
const Routes = express.Router();

const users = require("./users");
const loginController = require('../controllers/auth.contoller')

/** Home Route */
Routes.get('/', function (req, res) {
    res.send('Home api page')
})

/**Login Route */
Routes.post('/login', loginController.login)


/** Routes Users  */
Routes.use("/users",users);


module.exports = Routes;



