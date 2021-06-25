import * as types from '../../constants/action-types';

export const onBoardingDoneAction = (status) => {
  return {
    type: types.BOARDING_DONE,
    payload: status
  }
}

export const logOutAction = () => {
  return {
    type: types.LOGOUT
  }
}

