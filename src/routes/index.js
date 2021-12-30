const express = require("express");
const Routes = express.Router();
const {authenticateToken} = require('../middleware/jwt-token-verification');

const validationMiddleware = require('../middleware/validation-middleware');

const users = require("./users");
const authController = require("../controllers/auth.contoller");
/** Home Route */
Routes.get("/", function (req, res) {
  res.send("Home api page");
});

/**Login Route */
Routes.post("/login",validationMiddleware.login, authController.login);

/**Login Route */
Routes.post("/register", validationMiddleware.signup , authController.register);

/**Logout Route */
Routes.post("/logout", authenticateToken , authController.logout);


/** Routes Users  */
Routes.use("/users",authenticateToken, users);

module.exports = Routes;
