const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { UnauthorizedException } = require("../../exceptions");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    tokens: {
      type: Array,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.__v;
        delete ret.tokens;
      },
    },
  },
  { timestamps: true }
);

userSchema.statics.findByLogin = async function ({ email, password }) {
  let user = await this.findOne({
    email,
  });

  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      return user;
    }
  }

  throw new UnauthorizedException(
    "Invalid Login Email & Password do not match!"
  );
};

userSchema.statics.register = async function (register) {
  return await this.create(register, function (err, userInstance) {
    if (err) throw new Error("BROKEN");
    return userInstance;
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
