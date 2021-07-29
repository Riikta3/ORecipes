import { getTitleByRecipesNumber } from 'src/selectors/recipes';

describe('getTitleByRecipesNumber', () => {
  describe('structure', () => {
    it('should be a function', () => {
      expect(typeof getTitleByRecipesNumber).toBe('function');
    });

    it('should return a string', () => {
      expect(typeof getTitleByRecipesNumber()).toBe('string');
    });
  });


  describe('execution', () => {
    it('should return the correct string if there is no recipes', () => {
      const mockState = {
        recipes: {
          list: []
        }
      };

      expect(getTitleByRecipesNumber(mockState))
        .toBe("Découvrez prochainement nos recettes");
    });
    it('should return the correct string if there is only one recipes', () => {
      const mockState = {
        recipes: {
          list: [
            { id: 1, title: 'Crepes' }
          ]
        }
      };
      expect(getTitleByRecipesNumber(mockState)).toBe("Découvrez notre recette");
    });
    it('should return the correct string if there is two or more recipes', () => {
      const mockState = {
        recipes: {
          list: [
            { id: 1, title: 'Crepes' },
            { id: 2, title: 'Pizzzah' }
          ]
        }
      };

      expect(getTitleByRecipesNumber(mockState)).toBe("Découvrez nos recettes");
    });
  });
});
