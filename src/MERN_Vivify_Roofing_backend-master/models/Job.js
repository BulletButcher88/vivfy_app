const mongoose = require("mongoose");

const followupSchema = require("./Followup");

const jobSchema = new mongoose.Schema({
  createdTime: { type: Date, default: Date.now },

  // Project details
  projectType: String,
  roofFrameType: String,
  sizeOfHome: String,
  houseLevels: String,
  roofType: String,
  currentRoofMaterial: String,
  desiredRoofMaterial: String,
  gutterDownpipeReplacement: String,

  // Client details
  name: String,
  suburb: String,
  email: String,
  phone: String,
  comments: String,

  // Interaction details
  followUps: [followupSchema],
  imageUrls: [String],
  assignedTrade: String,
  sold: Boolean,
  inProgress: Boolean,
  archived: Boolean
});

module.exports = mongoose.model("Job", jobSchema);
