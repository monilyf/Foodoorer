import * as types from '../../constants/action-types';

const initialState = {
  user: {},
  token:'',
  loading:false,
};
const signInReducer = (state = initialState, action) => {
  console.log('SignInReducer==-=-=-',action)
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      console.log('Success')
      return {
        ...state,
        user: action.payload,

      };
    case types.LOGIN_USER_FAILURE:
      return {
        ...state,
        loading:false
        // user: action.payload,
      };
      case types.LOGOUT:
        return {
          ...state,
          user:{},
          token:''
        }
    default:
      return state;
  }
};

export default signInReducer;
