import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "https://express-api-egw6.onrender.com/recipes";
function RecipeEdit() {
  // Create provision to store data entered by the user
  const [name, setName] = useState<string>("");
  const [cuisine, setcuisine] = useState<string>("");
  const [ingredients, setingredients] = useState<string>("");
  const [prepTimeMinutes, setprepTimeMinutes] = useState<string>("");
  const [cookTimeMinutes, setcookTimeMinutes] = useState<string>("");

  const navigate = useNavigate();
  let params = useParams();

  const fetchRecipe = async () => {
    const response = await fetch(`${API_URL}/${params.id}`);
    const recipe = await response.json();
    setName(recipe.name);
    setcuisine(recipe.cuisine);
    setingredients(recipe.ingredients);
    setprepTimeMinutes(recipe.prepTimeMinutes);
    setcookTimeMinutes(recipe.cookTimeMinutes);
  };

  useEffect( () => {
    fetchRecipe();
  }, [params.id])

  const editRecipe = async () => {
    // JavaScript
    const recipe = {
       name,
       cuisine,
       ingredients,
       prepTimeMinutes,
       cookTimeMinutes,
    };

    await fetch(`${API_URL}/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });

    navigate("/recipes");
  };
  return (
    <div className="container">
      <div className="border rounded shadow p-4">
        <h2 className="text-primary my-3 text-center">Edit Recipe</h2>
        <div className="mb-3">
          <label htmlFor="nameTextBox" className="form-label text-warning">
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
          <label htmlFor="prepTimeTextBox" className="form-label text-warning">
            Cuisine:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Cuisine"
            id="prepTimeTextBox"
            value={cuisine}
            onChange={(event) => setcuisine(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cookTimeTextBox" className="form-label text-warning">
            Ingredients:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Ingredients"
            id="cookTimeTextBox"
            value={ingredients}
            onChange={(event) => setingredients(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="servingsTextBox" className="form-label text-warning">
            Preparation Time:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Preparation Time in Minutes"
            id="servingsTextBox"
            value={prepTimeMinutes}
            onChange={(event) => setprepTimeMinutes(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="difficultyTextBox"
            className="form-label text-warning"
          >
            Cook Time:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Cooking Time in Minutes"
            id="difficultyTextBox"
            value={cookTimeMinutes}
            onChange={(event) => setcookTimeMinutes(event.target.value)}
          />
        </div>

        
        
        <div className="mt-5">
          <button
            className="btn btn-success w-100"
            onClick={() => editRecipe()}
          >
            Edit Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
export default RecipeEdit;