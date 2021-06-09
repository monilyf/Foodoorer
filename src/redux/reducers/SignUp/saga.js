import {types} from '../../Constants/action-types';
import {put,call} from 'redux-saga/effects';
import axios from 'axios';

export function* createUsers(action){
    try{
        const apiConfig = {
            method:'POST',
            url:'http://foodooerdashboard.project-demo.info/api/register',
            data:{
                name:action.payload.name,
                email:action.payload.email,
                password:action.payload.password,
                password_confirmation:action.payload.confirmPassword,
                contact_no:action.payload.phone,
            },
        };

        const response = yield call(axios, apiConfig);
        console.log('api response--',response.data);
        yield put({type:types.CREATE_USER_SUCCESS,payload:response});
    }
    catch(e){
        console.log(e);
        yield put({type:types.CREATE_USER_FAILURE, payload:e.message});
    }
    
}