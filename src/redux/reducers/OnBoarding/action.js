import {SET_ONBOARDING,SET_ONBOARDING_SUCCESS,SET_ONBOARDING_FAILURE} from '../../Constants/action-types';

export const onBoardingDone = (val) =>
  ({
  type: SET_ONBOARDING,
  payload:val,
})
