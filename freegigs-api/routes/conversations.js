const router = require("express").Router();
const Conversation = require("../models/Conversation");
const {
  verifyTokenAndAuthorization,
  verifyChatRoom,
} = require("./verifyToken");

//Create
router.post("/:id", verifyTokenAndAuthorization, async (req, res) => {
  const newConversation = new Conversation({
    members: [req.params.id, req.body.receiverID],
  });

  try {
    const conversation = await Conversation.find({
      members: {
        $all: [req.params.id, req.body.receiverID],
      },
    });

    if (conversation.length) {
      return res.status(203).json(conversation);
    } else {
      const savedConversation = await newConversation.save();
      res.status(201).json(savedConversation);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Fetch All Rooms
router.get("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.id] },
    });

    res.status(201).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Fetch One Conversation Room
router.get("/find/:firstID/:secondID", verifyChatRoom, async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstID, req.params.secondID] },
    });

    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
