import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://express-api-egw6.onrender.com/recipes";
function RecipeAdd() {
  
  const [name, setName] = useState<string>("");
  const [cuisine, setcuisine] = useState<string>("");
  const [ingredients, setingredients] = useState<string>("");
  const [prepTimeMinutes, setprepTimeMinutes] = useState<string>("");
  const [cookTimeMinutes, setcookTimeMinutes] = useState<string>("");
  const [image, setimage] = useState<string>("");

    const navigate = useNavigate();


   const addRecipe = async () => {
    // JavaScript
    const recipe = {
      name,
      cuisine,
      ingredients,
      prepTimeMinutes,
      cookTimeMinutes,
      image,
    };

    console.log(recipe);

    await fetch(API_URL, {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(recipe)
    });
        navigate("/recipes");

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
          <label htmlFor="cuisineTextBox" className="form-label text-danger">
            Cuisine:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Cuisine Type"
            id="cuisineTextBox"
            value={cuisine}
            onChange={(event) => setcuisine(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ingredientsTextBox" className="form-label text-danger">
            Ingredients:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Ingredients"
            id="ingredientsTextBox"
            value={ingredients}
            onChange={(event) => setingredients(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="prepTimeTextBox" className="form-label text-danger">
            Preparation Time:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Preparation Time in Minutes"
            id="prepTimeTextBox"
            value={prepTimeMinutes}
            onChange={(event) => setprepTimeMinutes(event.target.value)}
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
            value={cookTimeMinutes}
            onChange={(event) => setcookTimeMinutes(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="imageTextBox" className="form-label text-danger">
            Image URL:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Image URL"
            id="imageTextBox"
            value={image}
            onChange={(event) => setimage(event.target.value)}
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