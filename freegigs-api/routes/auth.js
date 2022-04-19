const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      "freegigsPassword"
    ).toString(),
    isProvider: req.body.isProvider,
    name: req.body.name,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(401).json("Wrong email!");
      return;
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      "freegigsPassword"
    );
    const unhashedPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    const inputPassword = req.body.password;

    if (unhashedPassword != inputPassword)
      res.status(401).json("Wrong password!");
    else {
      const accessToken = jwt.sign(
        {
          id: user._id,
          isProvider: user.isProvider,
        },
        "freegigsJWT",
        { expiresIn: "3d" }
      );

      const { password, ...others } = user._doc;
      res.status(200).json({ ...others, accessToken });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
