const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const express = require("express")
const mongoose = require("mongoose")

const app = express();
app.use(express.json())

mongoose.connect(
"mongodb+srv://ayshaifra149_db_user:aysha09@cluster0.vditcxk.mongodb.net/CollegeDB"

)

.then(()=> console.log("Express app connected to MongoDB"))
.catch((err) => console.error(err))

const Leader = require("./models/Leader");

app.post("/leaders", async (req, res) => {
  const leader = new Leader(req.body);
  const savedLeader = await leader.save();

  res.status(201).json(savedLeader);
});

 app.get("/leaders", async (req, res) => {
  const leaders = await Leader.find();
   res.json(leaders);
});

app.use((err, req, res, next) => {
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({
      message: "Invalid JSON in request body. Send a valid JSON object.",
    });
  }

  next(err);
});

app.listen(3000, () => {
  console.log("Express App running on port 3000");
});