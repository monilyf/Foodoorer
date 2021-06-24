// import {types} from '../../Constants/action-types';
// export const createUser = (user) => ({
//     type: types.CREATE_USER,
//     payload:user,
// })


// // console.log('action create user-',user)
// //action create user- {"email": "mansi@gmail.com", "name": "Mansi", "password": "1236523", "phone": "9898369949"}



import {types} from '../../Constants/action-types';

export const registerUserAction = (user, props) => {
    return {
        type: types.CREATE_USER,
        payload: user, props
    }
}










