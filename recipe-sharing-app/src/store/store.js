import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [
    { id: "1", title: "Pasta", description: "Delicious Italian pasta recipe" },
    { id: "2", title: "Salad", description: "Healthy vegetable salad" },
    { id: "3", title: "Pizza", description: "Classic homemade pizza" },
  ],

  favorites: [],

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  recommendations: [],

  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.3
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
