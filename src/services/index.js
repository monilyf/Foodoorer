import AsyncStorage from '@react-native-async-storage/async-storage';
import apiMethods from '../utils/Constants'
// import NetInfo from "@react-native-community/netinfo";
import NetInfo from "@react-native-community/netinfo";
import { axiosInstance } from './serviceInstance';

const logout = (props) => {
    AsyncStorage.clear();
    // props.navigation.navigate('Auth')
}
const errorResponse = (err) => {
    let errorRes = {};
    errorRes.isSucess = false;
    errorRes.message = "Failed, Something went wrong!";
    errorRes.error = err;
    return errorRes;
}
const successResponse = (response, props) => {
    var successRes = {};
    if (response?.isTokenExpired) {
        successRes.isSucess = false;
        logout(props);
        return successRes;
    }
    successRes.isSucess = true;
    successRes.Result = response;
    return successRes
}

export const callService = (url, method = "", params = {}, props = {}, cbError, cbSuccess) => {
    return NetInfo.fetch().then(state => {
        if (state.isConnected) {
            switch (method) {
                case apiMethods.apiMethods.POST:
                    return axiosInstance.post(url, params)
                        .then(response => {
                            return successResponse(response, props)
                        })
                        .catch(error => {
                            return errorResponse(error);
                        });
                case apiMethods.apiMethods.PUT:
                    return axiosInstance.put(url, params)
                        .then(response => {
                            return successResponse(response, props)
                        })
                        .catch(error => {
                            return errorResponse(error);
                        });
                case apiMethods.apiMethods.DELETE:
                    return axiosInstance.delete(url, params)
                        .then(response => {
                            return successResponse(response, props)
                        })
                        .catch(error => {
                            return errorResponse(error);
                        });
                default:
                    return axiosInstance.get(url)
                        .then(response => {
                            return successResponse(response, props)
                        })
                        .catch(error => {
                            return errorResponse(error);
                        });
            }
        } else {
            cbError(
                {
                    status: 422,
                    message: 'Internet connection not available.'
                })
            return errorResponse({});
        }
    });
}