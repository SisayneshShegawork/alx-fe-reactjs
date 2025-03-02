import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./store";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes(state));

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
