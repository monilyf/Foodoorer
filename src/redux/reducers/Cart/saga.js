import {cartAction} from '../../Constants/action-types';
import {put,call} from 'redux-saga/effects';
import axios from 'axios';

export function* setItemIdCart(action){
    try{
        // console.log('-----------------saga payload--',action.payload)
        yield put({type:cartAction.ADD_ITEM_ID,payload:action.payload});
    }
    catch(e){
        console.log(e);
        yield put({type:cartAction.CART_FAILURE_ADD, payload:e.message});
    }
    
}
export function* setItemDetailsCart(action){
    try{
        // console.log('-----------------saga payload--',action.payload)
        yield put({type:cartAction.ADD_ITEM_DETAILS,payload:action.payload});
    }
    catch(e){
        console.log(e);
        yield put({type:cartAction.CART_FAILURE_ADD, payload:e.message});
    }
    
}