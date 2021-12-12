const mongoose = require('mongoose');
const { dbDatabase,dbHost,dbConnection,dbPort } = require('../../config/config');

const connectDb = () => {
  //Set up default mongoose connection
  var mongoDB = `${dbConnection}://${dbHost}:${dbPort}/${dbDatabase}`;
  return mongoose.connect(mongoDB);
};

module.exports = {connectDb}
