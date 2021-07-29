export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS';
export const GET_FAVORITES = 'GET_FAVORITES';
export const GET_FAVORITES_SUCCESS = 'GET_FAVORITES_SUCCESS';

// action qui déclenche la requete
export const getRecipes = () => ({
  type: GET_RECIPES,
});

// action lorsque la réponse arrive
export const getRecipesSuccess = (recipes) => ({
  type: GET_RECIPES_SUCCESS,
  recipes: recipes,
});

export const getFavorites = () => ({
  type: GET_FAVORITES,
});

export const getFavoritesSuccess = (favoritesRecipes) => ({
  type: GET_FAVORITES_SUCCESS,
  favoritesRecipes,
});
