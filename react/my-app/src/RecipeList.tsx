import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Recipe = {
  id: string;
  name: string;
  PrepTimeMinutes: number;
  CookTimeMinutes: number;
  Servings: number;
  Cuisine: string;
  Difficulty: string;
};

function RecipeList() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const fetchRecipes = async () => {
    const response = await fetch(
      "https://6a7dddb8f8b2ed99ca4eec0e.mockapi.io/Recipes",
    );
    const data = await response.json();
    setRecipes(data);
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
            <th>id</th>
            <th>name</th>
            <th>Prep Time</th>
            <th>Cook Time</th>
            <th>Servings</th>
            <th>Cuisine</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td>{recipe.id}</td>
              <td>{recipe.name}</td>
              <td>{recipe.PrepTimeMinutes}</td>
              <td>{recipe.CookTimeMinutes}</td>
              <td>{recipe.Servings}</td>
              <td>{recipe.Cuisine}</td>
              <td>{recipe.Difficulty}</td>


            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default RecipeList;