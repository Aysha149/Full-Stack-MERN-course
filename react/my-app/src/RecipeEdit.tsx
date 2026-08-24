import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "https://6a7dddb8f8b2ed99ca4eec0e.mockapi.io/Recipes";
function RecipeEdit() {
  // Create provision to store data entered by the user
  const [name, setName] = useState<string>("");
  const [prepTimeMinutes, setPrepTimeMinutes] = useState<string>("");
  const [cookTimeMinutes, setCookTimeMinutes] = useState<string>("");
  const [servings, setServings] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [cuisine, setCuisine] = useState<string>("");

  const navigate = useNavigate();
  let params = useParams();

  const fetchRecipe = async () => {
    const response = await fetch(`${API_URL}/${params.id}`);
    const recipe = await response.json();
    setName(recipe.name);
    setPrepTimeMinutes(recipe.prepTimeMinutes);
    setCookTimeMinutes(recipe.cookTimeMinutes);
    setServings(recipe.servings);
    setDifficulty(recipe.difficulty);
    setCuisine(recipe.cuisine);
  };

  useEffect( () => {
    fetchRecipe();
  }, [params.id])

  // hits the API and adds the Recipe in Backend
  const editRecipe = async () => {
    // JavaScript
    const recipe = {
      name,
      prepTimeMinutes,
      cookTimeMinutes,
      servings,
      difficulty,
      cuisine,
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
            Prep Time:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Preparation Time in Minutes"
            id="prepTimeTextBox"
            value={prepTimeMinutes}
            onChange={(event) => setPrepTimeMinutes(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cookTimeTextBox" className="form-label text-warning">
            Cook Time:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Cooking Time in Minutes"
            id="cookTimeTextBox"
            value={cookTimeMinutes}
            onChange={(event) => setCookTimeMinutes(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="servingsTextBox" className="form-label text-warning">
            Servings:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Number of Servings"
            id="servingsTextBox"
            value={servings}
            onChange={(event) => setServings(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="difficultyTextBox"
            className="form-label text-warning"
          >
            Difficulty:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Level of Difficulty (Easy, Medium, Hard)"
            id="difficultyTextBox"
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cuisineTextBox" className="form-label text-warning">
            Cuisine:{" "}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Cuisine (Indian, Chinese, Bhatkali)"
            id="cuisineTextBox"
            value={cuisine}
            onChange={(event) => setCuisine(event.target.value)}
          />
        </div>
        
        <div className="mt-5">
          <button
            className="btn btn-warning w-100"
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