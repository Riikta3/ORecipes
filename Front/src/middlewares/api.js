import axios from 'axios';

import {
  GET_RECIPES,
  getRecipesSuccess,
  GET_FAVORITES,
  getFavorites,
  getFavoritesSuccess,
} from 'src/actions/recipes';

import {
  SUBMIT_LOGIN,
  loginSuccess,
} from 'src/actions/user';

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_RECIPES:
      axios.get(`${process.env.API_URL}/recipes`)
        .then((response) => {
          store.dispatch(getRecipesSuccess(response.data));
        });
      next(action);
      break;
    case SUBMIT_LOGIN: {
      const state = store.getState();

      const loginRequest = {
        method: 'post',
        url: `${process.env.API_URL}/login`,
        data: {
          email: state.user.email,
          password: state.user.password,
        },
      };

      axios(loginRequest)
        .then((response) => {
          store.dispatch(loginSuccess(response.data));
          store.dispatch(getFavorites());
        });
      break;
    }
    case GET_FAVORITES: {
      const state = store.getState();

      const getFavoritesRequest = {
        method: 'get',
        url: `${process.env.API_URL}/favorites`,
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      };

      axios(getFavoritesRequest)
        .then((response) => {
          store.dispatch(getFavoritesSuccess(response.data.favorites));
        });
      break;
    }
    default:
      next(action);
      break;
  }
};

export default apiMiddleware;
