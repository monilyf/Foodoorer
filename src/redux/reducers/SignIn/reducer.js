import * as types from '../../Constants/action-types';

const initialState = {
  user: {},
  token: '',
  loading: false,
};
const signInReducer = (state = initialState, action) => {
  // console.log('SignInReducer==-=-=-', action)
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      console.log('Success')
      return {
        ...state,
        user: action.payload.data,
        token: action.payload.data.token
        // token: action.payload

      };
    case types.LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false
        // user: action.payload,
      };
    case types.LOGOUT:
      // console.log("logout reducer")
      return {
        ...state,
        user: {},
        token: ''
      }
    default:
      return state;
  }
};

export default signInReducer;
