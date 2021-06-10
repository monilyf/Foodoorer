import {SET_ONBOARDING, SET_ONBOARDING_SUCCESS,SET_ONBOARDING_FAILURE} from '../../Constants/action-types';

const initialState = {
  val: '',
};
const onBoardingReducer = (state = initialState, action) => {
  // console.log('onboardingReducer--action=-=-=', action.payload);
  switch (action.type) {


    case SET_ONBOARDING_SUCCESS:
      // console.log('onboardingReducer--SET_ONBOARDING_SUCCESS=-=-=', action.payload);

      return {
        ...state,
        val: action.payload,
      };

      case SET_ONBOARDING_FAILURE:
        // console.log('onboardingReducer--SET_ONBOARDING_FAILURE=-=-=',action.payload) 
      
            return {
              
              ...state,
              val: action.payload,
            };
          
    default:
      // console.log('onboardingReducer--default=-=-=', state);

      return state;
  }
};

export default onBoardingReducer;
