const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    conversationID: { type: String },
    senderID: { type: String },
    text: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", chatSchema);
