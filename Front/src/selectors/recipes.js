/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} recipes - toutes les recettes
 * @param {string} searchedSlug - le slug de la recette recherchée
 * @return {Object} - La recette trouvée
 */
export function findRecipe(recipes, searchedSlug) {
  const recipe = recipes.find((testedRecipe) => {
    return testedRecipe.slug === searchedSlug;
  });
  return recipe;
}

// renvoie le titre de la page, en fonction du nombre
// de recettes dans le state
// SI 0 recettes --> "Découvrez prochainement nos recettes"
// SI 1 recettes --> "Découvrez notre recette"
// SI 2-N recettes --> "Découvrez nos recettes"
export function getTitleByRecipesNumber(state) {
  if (!state || state.recipes.list.length === 0) {
    return 'Découvrez prochainement nos recettes';
  }
  if (state.recipes.list.length === 1) {
    return 'Découvrez notre recette';
  }
  // si je ne suis passé dans aucun des ifs...
  // je return la version pour 2+ recettes
  return 'Découvrez nos recettes';
}
