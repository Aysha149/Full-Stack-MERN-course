import { useState } from "react";

const API_URL = "https://6a7dddb8f8b2ed99ca4eec0e.mockapi.io/Recipes"
function RecipeAdd() {
  // Create provision to store data entered by the user
  
  const [name, setName] = useState<string>("");
  const [PrepTimeMinutes, setPrepTimeMinutes] = useState<string>("");
  const [CookTimeMinutes, setCookTimeMinutes] = useState<string>("");
  const [Servings, setServings] = useState<string>("");
  const [Cuisine, setCuisine] = useState<string>("");
  const [Ratings, setRatings] = useState<string>("");


  const addRecipe = async () => {
    // JavaScript
    const recipe = {
      name,
      PrepTimeMinutes,
      CookTimeMinutes,
      Servings,
      Cuisine,
      Ratings,
    };

    console.log(recipe);

    await fetch(API_URL, {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(recipe)
    });

    // Call API
  };

  return (
    <div className="container">
      <div className="border rounded shadow p-4">
        <h2 className="text-primary fw-bold my-3 text-center">Add Recipe</h2>



        <div className="mb-3">
          <label htmlFor="nameTextBox" className="form-label text-danger">
            Name:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Recipe Name"
            id="nameTextBox"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="prepTimeTextBox" className="form-label text-danger">
            Prep Time:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Preparation Time in Minutes"
            id="prepTimeTextBox"
            value={PrepTimeMinutes}
            onChange={(event) => setPrepTimeMinutes(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cookTimeTextBox" className="form-label text-danger">
            Cook Time:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Cooking Time in Minutes"
            id="cookTimeTextBox"
            value={CookTimeMinutes}
            onChange={(event) => setCookTimeMinutes(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="servingsTextBox" className="form-label text-danger">
            Servings:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Number of Servings"
            id="servingsTextBox"
            value={Servings}
            onChange={(event) => setServings(event.target.value)}
          />
        </div>


        <div className="mb-3">
          <label htmlFor="cuisineTextBox" className="form-label text-danger">
            Cuisine:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Cuisine Type"
            id="cuisineTextBox"
            value={Cuisine}
            onChange={(event) => setCuisine(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="RatingsTextBox" className="form-label text-danger">
            Ratings:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Ratings (1-5)"
            id="RatingsTextBox"
            value={Ratings}
            onChange={(event) => setRatings(event.target.value)}
          />
        </div>



        <div className="mt-5">
          <button className="btn btn-primary w-100" onClick={() => addRecipe()}>
            Add Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
export default RecipeAdd;