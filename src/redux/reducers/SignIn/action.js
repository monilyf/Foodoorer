import {FETCH_USER} from '../../Constants/action-types';
 export const getUser = (user) => ({
     type: FETCH_USER,
     user,
})