// import {types} from '../../Constants/action-types';
// export const createUser = (user) => ({
//     type: types.CREATE_USER,
//     payload:user,
// })


// // console.log('action create user-',user)
// //action create user- {"email": "mansi@gmail.com", "name": "Mansi", "password": "1236523", "phone": "9898369949"}



import * as types from '../../Constants/action-types';

export const registerUserAction = (param, props) => {
    return {
        type: types.REGISTER_USER,
        payload: { param, props }
    }
}










