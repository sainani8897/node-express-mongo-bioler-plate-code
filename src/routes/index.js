const express = require("express");
const Routes = express.Router();
const {authenticateToken} = require('../middleware/jwt-token-verification');

const validationMiddleware = require('../middleware/validation-middleware');

const users = require("./users");
const authController = require("../controllers/auth.contoller");
const {profile,changePassword} = require("../controllers/user.controller");
/** Home Route */
Routes.get("/", function (req, res) {
  res.send("Home api page");
});

/**Login Route */
Routes.post("/login",validationMiddleware.login, authController.login);

/**Register Route */
Routes.post("/register", validationMiddleware.signup , authController.register);

/**Logout Route */
Routes.post("/logout", authenticateToken , authController.logout);


/** Routes Users  */
Routes.use("/users",authenticateToken, users);


Routes.get("/profile",authenticateToken, profile);

/** Change Password */
Routes.patch("/change-password",validationMiddleware.changePassword , authenticateToken,changePassword);


module.exports = Routes;
