import {addressActions} from '../../Constants/action-types';
import {put,call} from 'redux-saga/effects';

export function* selectedAddresss(action){
    try{
        console.log('-----------------saga payload--',action.payload)
        yield put({type:addressActions.SELECT_ADDRESS_SUCCESS,payload:action.payload});
    }
    catch(e){
        console.log(e);
        yield put({type:addressActions.SELECT_ADDRESS_FAILURE, payload:e.message});
    }
    
}