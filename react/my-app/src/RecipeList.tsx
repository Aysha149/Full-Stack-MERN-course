import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Recipe = {
  _id: string;
  name: string;
  cuisine: string;
  ingredients: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  image?: string;
};

function RecipeList() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const fetchRecipes = async () => {
    const response = await fetch(
      "https://express-api-egw6.onrender.com/recipes",
    );
    const data = await response.json();
    setRecipes(data);
  };

  const deleteRecipe = async (id: string) => {
    const isDeleteConfirmed = window.confirm(
      "Are you sure you want to delete the selected Recipe?",
    );

    if (isDeleteConfirmed) {
      const API_URL = `https://express-api-egw6.onrender.com/recipes/${id}`;
      await fetch(API_URL, { method: "DELETE" });
      fetchRecipes();
    }
  };

  // To load data directly on component mount
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="p-3">
      <Link className="btn btn-primary mb-4" to="/recipes-add">
        Add a New Recipe
      </Link>
      <table className="table table-bordered table-striped table-hover">
        <thead className="table-danger">
          <tr>
            <th>_id</th>
            <th>name</th>
            <th>cuisine</th>
            <th>Ingredients</th>
            <th>Prep Time</th>
            <th>Cook Time</th>
            <th>image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe._id}>
              <td>{recipe._id}</td>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.prepTimeMinutes}</td>
              <td>{recipe.cookTimeMinutes}</td>
              <td>
                <img src={recipe.image} alt={recipe.name} width="100" />
              </td>
              <td>
                <Link
                  to={`/recipes-edit/${recipe._id}`}
                  className="btn btn-warning me-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger me-2"
                  onClick={() => deleteRecipe(recipe._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default RecipeList;
