import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import store from '../redux/store';

let axiosInstance = axios.create({
    baseURL: "http://foodooerdashboard.project-demo.info/api",
    timeout: 15000
});

axiosInstance.defaults.headers.post['content-type'] = 'application/json';
console.log("token###########RRRRRRRRRRRRRRRRRR", store.getState().signIn.token)
axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${store.getState().signIn.token}`;

// store.subscribe(listener);

// add default token in authenticate apis
// function listener() {
// if (store.getState() !== undefined) {
// axiosInstance.defaults.headers.common['Authorization'] = `${store.getState().token}`;
// }
// }
export {
    axiosInstance
};