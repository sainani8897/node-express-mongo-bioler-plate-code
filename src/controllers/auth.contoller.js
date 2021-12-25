const { User } = require("../database/Models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async function (req, res, next) {
  user = await User.findByLogin(req.body)
    .then((user) => {
      console.log("this is user",user);
      const token = jwt.sign({data:user}, process.env.APP_KEY, {
        expiresIn: "2h",
      });
      user.token = token;
      console.log(user);
      res.status(200).json({id:user._id,name:user.name,email:user.email,token});
    })
    .catch((err) => {
      next(err);
    });
};


exports.register = async function (req, res, next) {
  user = await User.findByLogin(req.body)
    .then(({user}) => {
      console.log("this is user",user);
      const token = jwt.sign({data:user}, process.env.APP_KEY, {
        expiresIn: "2h",
      });
      user.token = token;
      console.log(user);
      res.status(200).json({id:user._id,name:user.name,email:user.email,token});
    })
    .catch((err) => {
      next(err);
    });
};
