const router = require("express").Router();
const { verifyTokenAndAuthorization } = require("./verifyToken");
const AdditionalUserDetails = require("../models/AdditionalUserDetails");

//CREATE
router.post("/:id", verifyTokenAndAuthorization, async (req, res) => {
  const newAdditionalDetails = new AdditionalUserDetails({
    userID: req.params.id,
    location: req.body.location,
    contacts: req.body.contacts,
    profileImage: req.body.profileImage,
    bannerImage: req.body.bannerImage,
    university: req.body.university,
    major: req.body.major,
    languages: req.body.languages,
    skills: req.body.skills,
    description: req.body.description,
  });

  try {
    const savedDetails = await newAdditionalDetails.save();
    res.status(201).json(savedDetails);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const details = await AdditionalUserDetails.findOne({
      userID: req.params.id,
    });

    res.status(201).json(details);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedUser = await AdditionalUserDetails.findOneAndUpdate(
      { userID: req.params.id },
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
