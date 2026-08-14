import { useEffect, useState } from "react";

type Recipe = {
  name: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  cuisine: string;
  id: string;
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
      <table className="table table-bordered table-striped table-hover">
        <thead className="table-danger">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Prep Time</th>
            <th>Cook Time</th>
            <th>Servings</th>
            <th>Cuisine</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td>{recipe.id}</td>
              <td>{recipe.name}</td>
              <td>{recipe.prepTimeMinutes}</td>
              <td>{recipe.cookTimeMinutes}</td>
              <td>{recipe.servings}</td>
              <td>{recipe.cuisine}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default RecipeList;