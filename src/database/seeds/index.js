const User = require("../Models/User");
const bcrypt = require("bcrypt");
const { connectDb } = require("../../config/database");

const seedUser = [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("Admin@123", 10),
  },
];

const seedDB = async () => {
  await connectDb();
  const res = await User.create(seedUser);
};

seedDB().then(() => {
  console.log("Database seed completed")
});
