import AsyncStorage from '@react-native-async-storage/async-storage';
import apiMethods from '../utils/Constants'
import NetInfo from "@react-native-community/netinfo";
import { axiosInstance } from './serviceInstance';
import { notifyMsg } from '../utils/CommonFunctions';
import store from '../redux/store';


const logout = (props) => {

}
console.log('service index')
const errorResponse = (err) => {
    console.log(err.response, "=======jjjjjjj")
    debugger
    let errorRes = {};
    errorRes.isSucess = false;
    errorRes.error = err.response.data;
    return errorRes;
}
const successResponse = (response) => {
    debugger
    let successRes = {};
    // if (response?.isTokenExpired) {
    //     successRes.isSucess = false;
    //     logout(props);
    //     return successRes;
    // }
    successRes.isSucess = true;
    successRes.Result = response.data;
    return successRes;
}

export const callService = ({ url, method = "", params = {}, props = {} }) => {
    return NetInfo.fetch().then(state => {
        if (state.isConnected) {
            switch (method) {
                case apiMethods.apiMethods.POST:
                    return axiosInstance.post(url, params)
                        .then(response => {
                            debugger
                            return successResponse(response)
                        })
                        .catch(error => {
                            debugger
                            return errorResponse(error);
                        });
                case apiMethods.apiMethods.PUT:
                    return axiosInstance.put(url, params)
                        .then(response => {
                            return successResponse(response)
                        })
                        .catch(error => {
                            return errorResponse(error);
                        });
                case apiMethods.apiMethods.DELETE:
                    return axiosInstance.delete(url, params)
                        .then(response => {
                            return successResponse(response)
                        })
                        .catch(error => {
                            return errorResponse(error);
                        });
                default:
                    console.log("default----")
                    // console.log("******************", store.getState().signIn.token)
                    return axiosInstance.get(url)
                        .then(response => {
                            debugger
                            console.log("response")
                            return successResponse(response)
                        })
                        .catch(error => {
                            debugger
                            console.log("error--------")
                            return errorResponse(error);
                        });
            }
        } else {
            notifyMsg({ message: "No internet connection!", success: false });
            return errorResponse({});
        }
    });
}