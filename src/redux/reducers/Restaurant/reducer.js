import * as types from '../../Constants/action-types';

const initialState = {
    restaurant: []
};
const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RESTAURANT_FETCH_SUCCESS:

            // console.log('Restaurant Reducer Action  Success')
            return {
                ...state,
                restaurant: action.payload,
            };
        case types.RESTAURANT_FETCH_FAILURE:
            return {
                ...state,
                restaurant: []
            };
        default:
            return state;
    }
};

export default restaurantReducer;