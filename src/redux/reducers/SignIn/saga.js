// // import {FETCH_USER_SUCCESS,  FETCH_USER_FAILURE} from '../../Constants/action-types';
// // import {pull,call, put} from 'redux-saga/effects';
// // import axios from 'axios';

// // export function* fetchUser(payload){
// //     try {
// //         const apiConfig ={
// //             method:'POST',
// //             url:"https://reqres.in/api/login",
// //             data:{
// //                 "email":"eve.holt@reqres.in",
// //                 "password":"cityslicka",
// //             }
// //         };
// //         const response = yield call(axios,apiConfig)
// //         console.log('Sign in response---',response.data)
// //         yield put({type:FETCH_USER_SUCCESS,payload:response})
// //     } catch (e) {
// //         console.log(e);
// //         yield put({type:FETCH_USER_FAILURE,payload:e.message})
// //     }
// // }

// import {FETCH_USER_SUCCESS,FETCH_USER_FAILURE} from '../../constants/action-types';

// import { put, call } from 'redux-saga/effects';
// import { loginService } from './services';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Routes from '../../../router/routes';
// import Snackbar from 'react-native-snackbar';
// import { Alert } from 'react-native';



// export function* loginUser(action) {
//     try {
//         console.log("Hello Saga")
//         // console.log(action)
//         let { props } = action.payload
//         const result = yield call(loginService, action);
//         debugger
//         if (result?.isSucess) {
//             debugger
//             yield put({ type: FETCH_USER_SUCCESS, payload: result.Result.data.data });
//             console.log("token", result.Result.data.data.token)
//             AsyncStorage.setItem("token", result.Result.data.data.token)
//             // AsyncStorage.setItem("userdata", JSON.stringify(result.Result.data.data))
//             setTimeout(() => {
//                 props.navigation.navigate(Routes.Authenticated)
//             }, 2000)
//             Snackbar.show({
//                 text: "Login Successfully",
//                 duration: Snackbar.LENGTH_SHORT,
//             });
//         }
//     }
//     catch (e) {
//         // console.log("user failure", action.payload)
//         yield call(Alert.alert, "Faliure", "Enter valid email or password")
//         yield put({ type: FETCH_USER_FAILURE, payload: e.message });
//         // AsyncStorage.removeItem("token")
//         Snackbar.show({
//             test: "Enter valid email or password",
//             duration: Snackbar.LENGTH_LONG
//         })

//     }
// }