import reducer, { initialState } from 'src/reducers/recipes';
import { getRecipes, getRecipesSuccess, getFavoritesSuccess } from 'src/actions/recipes';

describe('recipes reducer', () => {
  describe('structure', () => {
    it('should be a function', () => {
      expect(typeof reducer).toBe('function');
    });

    // elle renvoie un objet
    it('should return an object', () => {
      expect(typeof reducer()).toBe('object');
    });
  });

  describe('execution', () => {
    it('should return the initial state when called without arguments', () => {
      expect(reducer()).toEqual(initialState);
    });
    it('should handle correctly GET_RECIPES action', () => {
      const oldState = reducer();
      const action = getRecipes();

      expect(reducer(oldState, action))
        .toEqual({
          ...oldState,
          loading: true,
        });
    });
    it('should handle correctly GET_RECIPES_SUCCESS action', () => {
      const oldState = reducer();
      const mockRecipes = [{
        id: 1,
        title: 'crepe',
      }];

      const action = getRecipesSuccess(mockRecipes);
      expect(reducer(oldState, action))
        .toEqual({
          ...oldState,
          loading: false,
          list: mockRecipes,
        });
    });
    it('should handle correctly GET_FAVORITES_SUCCESS action', () => {
      const oldState = reducer();
      const mockFavorites = [{
        id: 1,
        title: 'crepe',
      }];

      const action = getFavoritesSuccess(mockFavorites);

      expect(reducer(oldState, action))
        .toEqual({
          ...oldState,
          favorites: mockFavorites,
        });
    });
  });
});
