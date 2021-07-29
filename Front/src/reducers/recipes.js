import { GET_RECIPES, GET_RECIPES_SUCCESS, GET_FAVORITES_SUCCESS } from 'src/actions/recipes';

export const initialState = {
  list: [],
  favorites: [],
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        loading: true,
      };
    case GET_RECIPES_SUCCESS:
      return {
        ...state,
        list: action.recipes,
        loading: false,
      };
    case GET_FAVORITES_SUCCESS:
      return {
        ...state,
        favorites: action.favoritesRecipes,
      };
    default:
      return state;
  }
};

export default reducer;
