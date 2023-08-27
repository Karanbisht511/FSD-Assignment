require('dotenv').config()
const { mongoose } = require("mongoose");

function connectMongo() {
  const uri =process.env.MONGO_URI

  try {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb connected");
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connectMongo;
