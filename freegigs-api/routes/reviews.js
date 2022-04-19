const router = require("express").Router();
const { verifyTokenAndAuthorization, verifyToken } = require("./verifyToken");
const Review = require("../models/Reviews");
const User = require("../models/User");
const AdditionalDetail = require("../models/AdditionalUserDetails");

//CREATE REVIEWS
router.post("/:id", verifyToken, async (req, res) => {
  if (req.params.id === req.body.commentedID)
    return res.status(500).json("You cannot review your own services!");

  const newReview = new Review({
    userID: req.params.id,
    commentedID: req.body.commentedID,
    description: req.body.description,
  });

  try {
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE REVIES
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const review = await Review.findOne({ _id: req.body.id });

    if (review.commentedID !== req.params.id)
      return res.status(500).json("This is not your review!");

    review.delete();

    res.status(200).json("Review has succesfully deleted!");
  } catch (err) {
    res.status(404).json("There is no review!");
  }
});

//GET REVIEWS OF USER
router.get("/:id", async (req, res) => {
  try {
    const reviews = await Review.find({ userID: req.params.id });
    let users = [];
    let additionalDetails = [];

    for (let i = 0; i < reviews.length; i++) {
      users.push(await User.findById(reviews[i].commentedID));
      additionalDetails.push(
        await AdditionalDetail.find({ userID: reviews[i].commentedID })
      );
    }

    res.status(200).json({ reviews, users, additionalDetails });
  } catch (err) {
    res.status(404).json("There is no review!");
  }
});

module.exports = router;
