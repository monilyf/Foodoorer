import {FETCH_USER,SET_ONBOARDING,cartAction, addressActions} from '../Constants/action-types';
import {takeEvery, takeLatest} from 'redux-saga/effects';
import {createUsers} from '../reducers/SignUp/saga';
import {fetchUser} from '../reducers/SignIn/saga';
import {setOnboarding} from '../reducers/OnBoarding/saga';
import {setItemDetailsCart,setItemIdCart} from '../reducers/Cart/saga';
import {selectedAddresss} from '../reducers/Address/saga';

export default function* rootSaga(){
    // yield takeEvery(types.CREATE_USER,createUsers);
    // yield takeEvery(FETCH_USER,fetchUser);
    yield takeLatest(SET_ONBOARDING,setOnboarding);
    yield takeEvery(cartAction.ADD_CART,setItemIdCart);
    yield takeEvery(cartAction.ADD_DETAILS_CART,setItemDetailsCart);
    yield takeEvery(addressActions.SELECT_ADDRESS,selectedAddresss);
}






