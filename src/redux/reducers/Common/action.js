import * as types from '../../Constants/action-types';

export const onBoardingDoneAction = (status) => {
  return {
    type: types.BOARDING_DONE,
    payload: status
  }
}

export const logOutAction = () => {
  console.log('logout')
  return {
    type: types.LOGOUT
  }
}

