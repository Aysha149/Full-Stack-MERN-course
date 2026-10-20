const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Express app connected to MongoDB"))
  .catch((err) => console.error(err));

  app.listen(3000, () => {
  console.log("Express App running on port 3000");
});



const Leader = require("./models/Leader");

app.post("/leaders", async (req, res) => {
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

app.get("/leaders", async (req, res) => {
  try {
    const leaders = await Leader.find();

    res.status(200).json(leaders);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch leaders",
    });
  }
});

app.get("/leaders/:id", async (req, res) => {
  try {
    const leader = await Leader.findById(req.params.id);

    if (!leader) {
      return res.status(404).json({
        message: "Leader  not found",
      });
    }

    res.status(200).json(leader);
  } catch (error) {
    res.status(400).json({
      message: "Invalid Leader ID",
    });
  }
});