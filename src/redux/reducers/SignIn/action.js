// import {FETCH_USER} from '../../Constants/action-types';
//  export const getUser = (user) => ({
//      type: FETCH_USER,
//      user,
// })

import {FETCH_USER} from '../../Constants/action-types';


export const loginUserAction = (param, props) => {
    return {
        type: FETCH_USER,
        payload: { param, props }
    }
}