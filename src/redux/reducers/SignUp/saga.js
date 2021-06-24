// import {types} from '../../Constants/action-types';
// import {put,call} from 'redux-saga/effects';
// import axios from 'axios';

// export function* createUsers(action){
//     try{
//         const apiConfig = {
//             method:'POST',
//             url:'http://foodooerdashboard.project-demo.info/api/register',
//             data:{
//                 name:action.payload.name,
//                 email:action.payload.email,
//                 password:action.payload.password,
//                 password_confirmation:action.payload.confirmPassword,
//                 contact_no:action.payload.phone,
//             },
//         };

//         const response = yield call(axios, apiConfig);
//         console.log('api response--',response.data);
//         yield put({type:types.CREATE_USER_SUCCESS,payload:response});
//     }
//     catch(e){
//         console.log(e);
//         yield put({type:types.CREATE_USER_FAILURE, payload:e.message});
//     }
    
// }


import {types} from '../../Constants/action-types';
import { put, call } from 'redux-saga/effects';
import { SignUpService } from './services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from '../../../router/routes';

import Snackbar from 'react-native-snackbar';
import { Alert } from 'react-native';


export function* createUsers(action) {
    try {

        let { props } = action
        console.log('\n\n', props, "propsss\n\n")
        const result = yield call(SignUpService, action);
        if (result?.isSucess)
            yield put({ type: types.CREATE_USER_SUCCESS, payload: result.Result.data.data })
        console.log("SignUp token", result.Result.data.data.token)
        console.log("token------", result)
        AsyncStorage.setItem("token", result.Result.data.data.token)
        // AsyncStorage.setItem("userdata", JSON.stringify(result.Result.data.data))
        setTimeout(() => {
            props.navigation.navigate(Routes.Authenticated)
        }, 2000)
    }
    catch (e) {
        console.log("user failure")
        // yield call(Alert.alert, "Faliure", "SignUp Unsuccessfully ")
        yield put({ type: types.CREATE_USER_FAILURE, payload: e.message });
        Snackbar.show({
            test: "SignUp Failed ",
            duration: Snackbar.LENGTH_LONG
        })
        // AsyncStorage.removeItem("token")
    }
}