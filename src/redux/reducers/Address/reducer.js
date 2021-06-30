import { addressActions } from '../../Constants/action-types';

const initialState = {
  address: '',
};
const addressReducer = (state = initialState, action) => {
  // console.log('addressReducer--action=-=-=', action.payload);
  switch (action.type) {


    case addressActions.SELECT_ADDRESS_SUCCESS:
      // console.log('addressReducer--SELECT_ADDRESS_SUCCESS=-=-=', action.payload);

      return {
        ...state,
        address: action.payload,
      };

    case addressActions.SELECT_ADDRESS_FAILURE:
      // console.log('addressReducer--SELECT_ADDRESS_FAILURE=-=-=',action.payload) 

      return {

        ...state,
        address: action.payload,
      };

    default:
      // console.log('addressReducer--default=-=-=', state);
      return state;
  }
};

export default addressReducer;
