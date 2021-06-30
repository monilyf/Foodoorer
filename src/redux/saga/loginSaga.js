import * as types from '../Constants/action-types';
import { put, call } from 'redux-saga/effects';
import Routes from '../../router/routes';
import { callService } from '../../services';
import apiUrl from '../../services/serverEndPoints';
import { notifyMsg, resetNavigation } from '../../utils/CommonFunctions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function* loginUser(action) {
    console.log('loginSaga-------', action)
    let { props } = action.payload;
    try {
        const result = yield call(callService, {
            url: apiUrl.login,
            method: 'POST',
            params: action.payload.param,
            props: props,
        });
        if (result.isSucess) {
            debugger;
            let message = result.Result.message;
            yield put({ type: types.LOGIN_USER_SUCCESS, payload: result.Result });
            setTimeout(() => {
                notifyMsg({ message: message });
                resetNavigation(props.navigation, Routes.Authenticated);
            }, 1000);
        } else {
            yield put({ type: types.LOGIN_USER_FAILURE });
            setTimeout(() => {
                notifyMsg({ message: result?.error?.message, success: false });
            }, 100);
        }
    } catch (error) {
        console.log(error);
        notifyMsg({ message: 'Failed ! try again', success: false });
        yield put({ type: types.LOGIN_USER_FAILURE });
    }
}
