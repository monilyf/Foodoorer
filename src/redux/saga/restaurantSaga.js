import * as types from '../Constants/action-types';
import { put, call } from 'redux-saga/effects';
import { callService } from '../../services';
import apiUrl from '../../services/serverEndPoints';
// import AsyncStorage from '@react-native-async-storage/async-storage';


export function* restaurantSaga(action) {
    // console.log('RestaurantSaga-------', action)
    try {
        const result = yield call(callService, {
            url: apiUrl.restaurant,
            method: 'GET',
            // params:{}
            // 'X-Access-Token': action.payload,

        });
        // console.log('restaurant saga-', result);
        debugger
        if (result.isSucess) {
            debugger
            // console.log("restaurant fetch success data", result.Result)
            yield put({ type: types.RESTAURANT_FETCH_SUCCESS, payload: result.Result.data });
        }
    } catch (error) {
        console.log(error, "=====")
        debugger
        // console.log("restaurant failure000000000000000", state)
        yield put({ type: types.RESTAURANT_FETCH_FAILURE });
    }
}