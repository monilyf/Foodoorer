import * as types from '../../Constants/action-types';

export const loginUserAction = (param, props) => {
    // console.log('loginUserAction', param, props)
    return {
        type: types.LOGIN_USER,
        payload: { param, props }
    }
}