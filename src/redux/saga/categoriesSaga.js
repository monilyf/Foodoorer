import * as types from '../Constants/action-types';
import { put, call } from 'redux-saga/effects';
import { callService } from '../../services';
import apiUrl from '../../services/serverEndPoints';
// import AsyncStorage from '@react-native-async-storage/async-storage';


export function* categoriesSaga(action) {
    console.log('CategoriesSaga-------', action)
    try {
        const result = yield call(callService, {
            url: apiUrl.categories,
            method: 'GET',
            // params:{}
            // 'X-Access-Token': action.payload,

        });
        console.log('Categories saga-', result);
        debugger
        if (result.isSucess) {
            debugger
            console.log("Categories fetch success data", result.Result)
            yield put({ type: types.CATEGORIES_FETCH_SUCCESS, payload: result.Result.data });
        }
    } catch (error) {
        console.log(error, "=====")
        debugger
        // console.log("restaurant failure000000000000000", state)
        yield put({ type: types.CATEGORIES_FETCH_FAILURE });
    }
}