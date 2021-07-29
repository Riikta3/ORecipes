import reducer, { initialState } from 'src/reducers/user';
import { changeField, loginSuccess } from 'src/actions/user';

describe('user reducer', () => {
  describe('structure', () => {
    it('should be a function', () => {
      expect(typeof reducer).toBe('function');
    });
    it('should return an object', () => {
      expect(typeof reducer()).toBe('object');
    });
  });


  describe('execution', () => {
    it('should return the initial state when called without arguments', () => {
      expect(reducer()).toEqual(initialState);
    });
    it('should handle correctly CHANGE_LOGIN_FIELD action', () => {
      const oldState = reducer();
      const action = changeField('toto', 'email');

      expect(reducer(oldState, action))
        .toEqual({
          ...oldState,
          email: 'toto',
        });
    });
    it('should handle correctly  LOGIN_SUCCESS action', () => {
      // on fabrique le state initial
      const oldState = reducer();

      // on "simule" la réponse de l'api
      const apiResponseMock = {
        "logged": true,
        "pseudo": "John",
        "token": "blabla"
      };

      // on fabrique notre action
      const action = loginSuccess(apiResponseMock);

      // on effectue notre assertion
      expect(reducer(oldState, action))
        .toEqual({
          ...oldState,
          nickname: "John",
          token: "blabla",
          isLogged: true,
        })
    });
  });
});
