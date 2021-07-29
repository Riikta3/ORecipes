import { CHANGE_LOGIN_FIELD, LOGIN_SUCCESS, LOGOUT } from 'src/actions/user';

export const initialState = {
  isLogged: false,
  email: '',
  password: '',
  nickname: null,
  token: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        nickname: action.nickname,
        token: action.token,
        isLogged: true,
        email: '',
        password: '',
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        nickname: null,
        token: null,
      };
    default:
      return state;
  }
};

export default reducer;
