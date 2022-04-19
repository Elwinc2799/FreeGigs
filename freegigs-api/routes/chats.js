const router = require("express").Router();
const Chat = require("../models/Chat");

//Send Chat
router.post("/:id", async (req, res) => {
  const newChat = new Chat({
    conversationID: req.body.conversationID,
    senderID: req.params.id,
    text: req.body.text,
  });

  try {
    const savedChat = await newChat.save();
    res.status(201).json(savedChat);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get All Chat
router.get("/:id", async (req, res) => {
  try {
    const chats = await Chat.find({
      conversationID: req.params.id,
    });

    res.status(200).json(chats);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
