const mongoose = require("mongoose");

const dbConnection = () => {
  const uri = process.env.MONGO_URL;
  mongoose.connect(uri).then((conn) => {
    console.log(`DATABASE CONNCTED ON :${conn.connection.host}`);
  });
};

module.exports = dbConnection;
