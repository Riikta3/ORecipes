import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Recipe from 'src/components/Recipe';

import { findRecipe } from 'src/selectors/recipes';

const mapStateToProps = (state, ownProps) => ({
  recipe: findRecipe(state.recipes.list, ownProps.match.params.slug),
});

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(Recipe);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
