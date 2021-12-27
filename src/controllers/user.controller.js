const { User } = require("../database/Models");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { NotFoundException } = require("../exceptions");

exports.index = async function (req, res, next) {
  res.send("At Users Controller");
};

exports.show = async function (req, res, next) {
  const slug = req.params.slug;
  try {
    var user = await User.findOne({ name: slug }).select("-password").exec();
    if (user) res.send(user);
    else throw new NotFoundException("No Data Found!");
  } catch (error) {
    next(error);
  }
};

exports.create = async function (req, res, next) {
  User.create(
    {
      email: req.body.email,
      name: req.body.name,
      password: bcrypt.hashSync(req.body.password, saltRounds),
    },
    function (err, userInstance) {
      if (err) res.send(err.message);
      res.send(userInstance);
    }
  );
};
