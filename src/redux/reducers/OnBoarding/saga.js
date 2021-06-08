import {types,SET_ONBOARDING_FAILURE,SET_ONBOARDING_SUCCESS} from '../../Constants/action-types';
import {put,call} from 'redux-saga/effects';
import axios from 'axios';

export function* setOnboarding(action){
    try{
        console.log('-----------------saga payload--',action.payload)
        yield put({type:SET_ONBOARDING_SUCCESS,payload:action.payload});
    }
    catch(e){
        console.log(e);
        yield put({type:SET_ONBOARDING_FAILURE, payload:e.message});
    }
    
}