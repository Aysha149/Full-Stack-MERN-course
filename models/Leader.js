const mongoose = require("mongoose");

const leaderSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  grade: { type: String, required: true },
  post: { type: String, required: true },
  isActive: {type: Boolean, default: true}
},
{
    timestamps: true
});

module.exports = mongoose.model("Leader", leaderSchema);