import {FETCH_USER,SET_ONBOARDING,types} from '../Constants/action-types';
import {takeEvery, takeLatest} from 'redux-saga/effects';
import {createUsers} from '../reducers/SignUp/saga';
import {fetchUser} from '../reducers/SignIn/saga';
import {setOnboarding} from '../reducers/OnBoarding/saga'

export default function* rootSaga(){
    // yield takeEvery(types.CREATE_USER,createUsers);
    // yield takeEvery(FETCH_USER,fetchUser);
    yield takeLatest(SET_ONBOARDING,setOnboarding);
}






