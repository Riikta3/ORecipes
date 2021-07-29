import { connect } from 'react-redux';

import { getRecipes } from 'src/actions/recipes';

import App from 'src/components/App';

const mapStateToprops = (state) => ({
  loading: state.recipes.loading,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  loadRecipes: () => {
    dispatch(getRecipes());
  },
});

export default connect(mapStateToprops, mapDispatchToProps)(App);
