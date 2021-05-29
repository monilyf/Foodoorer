import {SET_ONBOARDING} from '../../Constants/action-types';

const initialState = {
  done:''
};
const onBoardingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ONBOARDING:
      return {
        ...state,
        done: action.payload,
      };
    
    default:
      return state;
  }
};

export default onBoardingReducer;
