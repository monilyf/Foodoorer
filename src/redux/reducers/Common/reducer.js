import * as types from '../../constants/action-types';
const initial = {
    boarding: false
};
const commonReducer = (state = initial, action) => {
    switch (action.type) {
        case types.BOARDING_DONE:
            return {
                ...state,
                boarding: action.payload,
            };
        default:
            return state;
    }
};
export default commonReducer;