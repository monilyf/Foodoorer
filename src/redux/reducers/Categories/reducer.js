import * as types from '../../Constants/action-types';

const initialState = {
    categories: []
};
const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CATEGORIES_FETCH_SUCCESS:

            // console.log('Restaurant Reducer Action  Success')
            return {
                ...state,
                categories: action.payload,
            };
        case types.CATEGORIES_FETCH_FAILURE:
            return {
                ...state,
                categories: []
            };
        default:
            return state;
    }
};

export default categoriesReducer;