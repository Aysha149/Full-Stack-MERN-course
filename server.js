const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(
  express.json({
    origin: "http://localhost:5173",
  }),
);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Express app connected to MongoDB"))
  .catch((err) => console.error(err));

//   app.listen(3000, () => {
//   console.log("Express App running on port 3000");
// });
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const logger = (req, res, next) => {
  console.log("Request recieved:", req.method, req.url, req.body);
  next();
};

app.use(logger);

//  const LeaderRoutes = require("./Routes/Leaders.routes");
//  app.use("/leaders",  LeaderRoutes)
const RecipeRoutes = require("./Routes/recipes.routes");
app.use("/recipes", RecipeRoutes);
