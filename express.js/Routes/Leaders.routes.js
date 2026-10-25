const express = require("express");
const router = express.Router();
const Leader = require("../models/Leader");
const validateLeader = require("../middlewares/validateLeader");


router.post("/", async (req, res) => {
  try {
    const leader = new Leader(req.body);
    const savedLeader = await leader.save();

    res.status(201).json({
      message: "Leader created successfully",
      data: savedLeader,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create leader",
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
        const query = req.query;

    let filter = {};

    if (query.name) {
      filter.name = query.name;
    }

    console.log(filter);

    const leaders = await Leader.find(filter);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch Leaders",
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const leaders = await Leader.find();

    res.status(200).json(leaders);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch Leaders",
      error: error.message,    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const leader = await Leader.findById(req.params.id);

    if (!leader) {
      return res.status(404).json({
        message: "Leader not found",
      });
    }

    res.status(200).json(leader);
  } catch (error) {
    res.status(400).json({
      message: "Invalid Leader ID",
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedLeader = await Leader.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    res.status(200).json({
      message: "Leader updated successfully",
      data: updatedLeader,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update Leader",
      error: error.message,
    });
  }
});

module.exports = router;

