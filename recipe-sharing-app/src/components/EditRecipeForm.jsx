import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./store";

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, updateRecipe } = useRecipeStore();
  const recipe = recipes.find((r) => r.id === id);

  const [title, setTitle] = useState(recipe?.title || "");
  const [description, setDescription] = useState(recipe?.description || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ id, title, description });
    navigate(`/recipe/${id}`);
  };

  if (!recipe) return <h2>Recipe Not Found</h2>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <label>Title:</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} required />

      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
