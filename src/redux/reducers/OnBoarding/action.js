import {SET_ONBOARDING,SET_ONBOARDING_SUCCESS,SET_ONBOARDING_FAILURE} from '../../Constants/action-types';

export const onBoardingDone = (val) =>
//  {console.log('onboarding===',val) 
  ({
  type: SET_ONBOARDING,
  payload:val,
})
// }

// console.log('onboarding--=-=-=',done) --true
// export const  onBoardingSuccess = (val) =>
// //  {console.log('onboarding===',val) 
//   ({
//   type: SET_ONBOARDING_SUCCESS,
//   payload:val,
// })

// export const onBoardingFailure=()=>({
//   type:SET_ONBOARDING_FAILURE,
// })