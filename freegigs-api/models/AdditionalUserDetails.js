const mongoose = require("mongoose");

const additionalDetailSchema = new mongoose.Schema({
  userID: { type: String, required: true, unique: true },
  location: { type: String },
  contacts: { type: String },
  profileImage: { type: String, default: "" },
  bannerImage: { type: String, default: "" },
  university: { type: String },
  major: { type: String },
  languages: { type: Array },
  skills: { type: Array },
  description: { type: String },
});

module.exports = mongoose.model("AdditionalDetail", additionalDetailSchema);
