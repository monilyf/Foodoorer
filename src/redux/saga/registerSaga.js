
import * as types from '../Constants/action-types';
import { put, call } from 'redux-saga/effects';
import Routes from '../../router/routes';
import { callService } from '../../services';
import apiUrl from '../../services/serverEndPoints';
import { notifyMsg, resetNavigation } from '../../utils/CommonFunctions';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function* registerSagaUser(action) {
    // debugger;
    // console.log('SignUpSaga-------', action)
    let { props } = action.payload;

    // yield put({ type: types.LOADING_START, payload: true });
    try {
        const result = yield call(callService, {
            url: apiUrl.register,
            method: 'POST',
            params: action.payload.param,
            props: props,
        });

        if (result.isSucess) {
            debugger;
            let message = result.Result.message;
            yield put({ type: types.REGISTER_USER_SUCCESS, payload: result.Result });
            setTimeout(() => {
                notifyMsg({ message: message });
                resetNavigation(props.navigation, Routes.Authenticated);
            }, 1000);
        } else {
            yield put({ type: types.REGISTER_USER_FAILURE });
            setTimeout(() => {
                notifyMsg({ message: result?.error?.message, success: false });
            }, 100);
        }
    } catch (error) {
        console.log(error);
        notifyMsg({ message: 'Failed ! try again', success: false });
        yield put({ type: types.REGISTER_USER_FAILURE });
    }
}