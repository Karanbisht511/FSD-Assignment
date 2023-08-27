const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema({
  customer: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    last_login: { type: Date, required: true },
    balance: { type: String, required: true },
    transaction: [
      {
        date: { type: Date, required: true },
        desc: { type: String, required: true },
        amount: { type: String, required: true },
      },
    ],
  },
});

const UserDetails = mongoose.model("UserDetails", userDetailsSchema);

module.exports = UserDetails;
