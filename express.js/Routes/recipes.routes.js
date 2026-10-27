const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipes");
const validateRecipe = require("../middlewares/validateRecipe");


router.post("/", validateRecipe, async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    const savedRecipe = await recipe.save();

    res.status(201).json({
      message: "Recipe created successfully",
      data: savedRecipe,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create Recipe",
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const Recipes = await Recipe.find();
    const query = req.query;

    let filter = {};

    if (query.name) {
      filter.name = { $regex: query.name, $options: "i" };
    }

        
    console.log(filter);

     const recipes = await Recipe.find(filter).sort({ name: 1 });
      res.status(200).json(recipes);
  } 
catch (error) {
    res.status(500).json({
      message: "Failed to fetch Recipe",
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const Recipe = await Recipe.find();

    res.status(200).json(Recipe);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch Recipe",
      error: error.message,    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({
      message: "Invalid Recipe ID",
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedRecipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    res.status(200).json({
      message: "Recipe updated successfully",
      data: updatedRecipe,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update Recipe",
      error: error.message,
    });
  }
});



router.delete("/:id", async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);

    if (!deletedRecipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    res.status(200).json({
      message: "Recipe deleted successfully",
      data: deletedRecipe,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to delete Recipe",
      error: error.message,
    });
  }
});


module.exports = router;

