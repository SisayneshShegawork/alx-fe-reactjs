import React from "react";
import useRecipeStore from "./store";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  return (
    <div>
      <h2>Recommended for You</h2>
      <button onClick={generateRecommendations}>Get Recommendations</button>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Try favoriting recipes!</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
