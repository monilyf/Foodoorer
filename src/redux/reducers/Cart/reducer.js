
import { cartAction } from '../../Constants/action-types';

const initialState = {
  cartItemId: [],
  cartItemDetails: [],
  error: ''
};
const cartReducer = (state = initialState, action) => {
  // console.log('cartReducer--action=-=-=', action.payload);
  // console.log('cartReducer--state=-=-=', state);
  switch (action.type) {


    case cartAction.ADD_ITEM_ID:
      // console.log('cartReducer--CART_SUCCESS_ADD=-=-=', action.payload);

      return {
        ...state,
        // cartItemId: action.payload,
        cartItemId: [...state.cartItemId, action.payload]

      };

    case cartAction.ADD_ITEM_DETAILS:
      // console.log('cartReducer--CART_SUCCESS_ADD=-=-=', action.payload);

      return {
        ...state,
        cartItemDetails: action.payload,
        // cartItemDetails: [...state.products, action.payload]

      };


    case cartAction.CART_FAILURE_ADD:
      // console.log('cartReducer--CART_FAILURE_ADD=-=-=', action.payload);


      return {

        ...state,
        error: action.payload,
      };

    default:
      // console.log('cartReducer--default=-=-=', state);

      return state;
  }
};

export default cartReducer;
