import React from "react";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "./store";

const DeleteRecipeButton = ({ id }) => {
  const { deleteRecipe } = useRecipeStore();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate("/");
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
