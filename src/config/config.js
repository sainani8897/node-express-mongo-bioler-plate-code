const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port:process.env.APP_PORT,
  endpoint: process.env.API_URL,
  masterKey: process.env.API_KEY,
};