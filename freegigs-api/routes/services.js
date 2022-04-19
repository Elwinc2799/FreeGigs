const router = require("express").Router();
const { find } = require("../models/Service");
const Service = require("../models/Service");
const { verifyTokenAndProvider } = require("./verifyToken");

//CREATE
router.post("/:id", verifyTokenAndProvider, async (req, res) => {
  const newService = new Service({
    userID: req.params.id,
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
  });

  try {
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndProvider, async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.body.id);
    res.status(200).json("Service has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL SERVICES BY PROVIDER
router.get("/:id", async (req, res) => {
  try {
    const services = await Service.find({ userID: req.params.id });
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET INDIVIDUAL SERVICE
router.get("/individual/:id", async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    res.status(200).json(service);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL SERVICE
router.get("/", async (req, res) => {
  const queryCategory = req.query.category;
  const queryMinPrice = req.query.minPrice;
  const queryMaxPrice = req.query.maxPrice;

  try {
    let services;

    if (queryCategory && queryMinPrice) {
      services = await Service.find({
        category: {
          $in: queryCategory,
        },
        price: {
          $gte: queryMinPrice,
          $lte: queryMaxPrice,
        },
      });
    } else if (queryCategory) {
      services = await Service.find({
        category: {
          $in: queryCategory,
        },
      });
    } else if (queryMinPrice) {
      services = await Service.find({
        price: {
          $gte: queryMinPrice,
          $lte: queryMaxPrice,
        },
      });
    } else {
      services = await Service.find();
    }

    res.status(200).json(services);
  } catch (err) {
    res.status(404).json("No services available");
  }
});

module.exports = router;
