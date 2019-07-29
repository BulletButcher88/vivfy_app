const mongoose = require("mongoose");

const followupSchema = new mongoose.Schema({
  followupDate: String, //date to conduct survey of the job
  salesName: String, // the person who is following up this time
  tradeComments: String,
  quoteAmount: Number,
});

module.exports = followupSchema;
