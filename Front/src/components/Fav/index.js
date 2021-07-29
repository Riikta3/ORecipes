import React from 'react';
import PropTypes from 'prop-types';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';

const Fav = ({ favoriteRecipes }) => (
  <Page>
    <AppHeader />
    <Content
      title="Vos recettes favorites"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
      recipes={favoriteRecipes}
    />
  </Page>
);

Fav.propTypes = {
  favoriteRecipes: PropTypes.array.isRequired,
};

export default Fav;
