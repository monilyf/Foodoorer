import {types} from '../../Constants/action-types';
import {put,call} from 'redux-saga/effects';
import axios from 'axios';

export function* createUsers(payload){
    try{
        const apiConfig = {
            method:'POST',
            url:'https://reqres.in/api/register',
            data:{
                email:'eve.holt@reqres.in',
                password:'cityslicka',
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