const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  name: { type: String, required: true },
  cuisine: { type: String, required: true },
  ingredients: { type: String, required: true },
  prepTimeMinutes: { type: Number, required: true },
  cookTimeMinutes: { type: Number, required: true },
  isActive: {type: Boolean, default: true}
},
{
    timestamps: true
});

module.exports = mongoose.model("Recipe", recipeSchema);