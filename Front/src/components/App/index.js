import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';
import Error from 'src/components/Error';
import Fav from 'src/containers/Fav';

import Loading from './Loading';

import './style.scss';

function App({ loadRecipes, loading, isLogged }) {
  useEffect(() => {
    // ici, je déclenche une action GET_RECIPES
    loadRecipes();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      {/*
        Le composant Switch permet de n'afficher que UNE SEULE route
        Dès que une route est atteinte, il ne regarde plus les autres.
        Dans notre cas, si ni / ni /recipe/:slug n'est atteint
        Alors il affichera la dernière route, qui affiche l'erreur
        Par contre si une des deux routes est atteinte
        Il n'affichera pas l'erreur
      */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* cette route n'existera que si l'on est connecté */}
        {isLogged && (
          <Route exact path="/favorites">
            <Fav />
          </Route>
        )}
        {!isLogged && (
          <Redirect from="/favorites" to="/" />
        )}
        <Route exact path="/recipe/:slug">
          <Recipe />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  loadRecipes: PropTypes.func.isRequired,
};

App.defaultProps = {
  loading: false,
};

export default App;
