import {takeEvery} from 'redux-saga/effects';
import * as types from '../constants/action-types';

import { loginUser} from './loginSaga';
// import { registerUser } from './registerSaga';
// import {setOnboarding} from '../reducers/OnBoarding/saga';
import {setItemDetailsCart,setItemIdCart} from '../reducers/Cart/saga';
import {selectedAddresss} from '../reducers/Address/saga';

export default function* rootSaga(){
    console.log('rootSaga')
    // yield takeEvery(types.REGISTER_USER,registerUser);
    yield takeEvery(types.LOGIN_USER,loginUser);
    // yield takeLatest(SET_ONBOARDING,setOnboarding);
    yield takeEvery(types.cartAction.ADD_CART,setItemIdCart);
    yield takeEvery(types.cartAction.ADD_DETAILS_CART,setItemDetailsCart);
    yield takeEvery(types.addressActions.SELECT_ADDRESS,selectedAddresss);
}






