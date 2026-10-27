const validateRecipe = (request, response, next) => {
  const RecipeObj = request.body;

  if (!RecipeObj.name) {
    return response.status(400).json({
      message: "Name is a required field",
    });
  }

  if (!RecipeObj.cuisine) {
    return response.status(400).json({
      message: "Cuisine is a required field",
    });
  }
  
  
  if (!RecipeObj.prepTimeMinutes) {
    return response.status(400).json({
      message: "Prep time is a required field",
    });
  }

    if (!RecipeObj.cookTimeMinutes) {
    return response.status(400).json({
      message: "Cook time is a required field",
    });
  }


  next();
};

module.exports = validateRecipe;