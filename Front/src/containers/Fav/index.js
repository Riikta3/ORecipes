import { connect } from 'react-redux';

import Fav from 'src/components/Fav';

const mapStateToprops = (state) => ({
  favoriteRecipes: state.recipes.favorites,
});

export default connect(mapStateToprops)(Fav);
