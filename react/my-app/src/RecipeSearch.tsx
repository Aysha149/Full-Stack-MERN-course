import { useState } from "react";

type Recipe = {
  _id: string;
  name: string;
  cuisine: string;
  ingredients: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  image?: string;
};

const RecipeSearch = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchRecipes = async () => {
    const apiUrl = `https://express-api-egw6.onrender.com/recipes?name=${searchTerm}`;
    console.log(apiUrl);
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    setRecipes(data);
  };

  return (
    <div className="container">
      <h1 className="text-success fw-bold mb-3">Search Recipes</h1>
      <div className="d-flex mb-4">
        <input
          type="text"
          className="form-control me-3"
          name="searchTextBox"
          id="searchTextBox"
          placeholder="Enter Recipe to search..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button className="btn btn-primary" onClick={() => fetchRecipes()}>
          Search
        </button>
      </div>

      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-3 mb-3 d-flex" key={recipe._id}>
          <div className="card h-100">
           <img
                src={recipe.image}
                className="card-img-top"
                alt={recipe.name}
              /> 
       <div className="card-body d-flex flex-column">
          <h5 className="card-title">{recipe.name}</h5>
          <p className="card-text">Cuisine: {recipe.cuisine}</p>
          <p className="card-text">Ingredients: {recipe.ingredients}</p>
          <p className="card-text">Preparation Time: {recipe.prepTimeMinutes} minutes</p>
          <p className="card-text">Cooking Time: {recipe.cookTimeMinutes} minutes</p>

          <a href="#" className="btn btn-primary mt-auto">
                  View Details
              </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;
