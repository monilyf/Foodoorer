import {FETCH_USER,types} from '../Constants/action-types';
import {takeEvery} from 'redux-saga/effects';
import {createUsers} from '../reducers/SignUp/saga';
import {fetchUser} from '../reducers/SignIn/saga'

export default function* rootSaga(){
    yield takeEvery(types.CREATE_USER,createUsers);
    yield takeEvery(FETCH_USER,fetchUser);
}






