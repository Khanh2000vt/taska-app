import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {describeSuccessResponse, describeErrorResponse} from './logger';
import {showMessage} from 'react-native-flash-message';
import {store} from '@redux/store';
import {Alert} from 'react-native';
import {logoutUser} from '@redux';
const api = axios.create();

export const BASEURL = 'https://base/api/';

api.interceptors.request.use(
  async (config: any) => {
    config.baseURL = BASEURL;
    const state = store.getState();
    const token = state?.accountSlice.token;
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        ...config.headers,
      };
    }
    if (config?.method?.toUpperCase() === 'GET') {
      config.params = {...config.params};
    }
    config.headers = {
      ...config.headers,
    };
    return config;
  },
  error => Promise.reject(error),
);

api.interceptors.response.use(
  //response success
  function (response: AxiosResponse) {
    console.log('====================================');
    console.log('response: ', response);
    console.log('====================================');
    //Hàm log trả về response (Có thể bật và tắt trong file logger)
    describeSuccessResponse(response);
    try {
      return response?.data;
    } catch (error) {
      console.log('====================================');
      console.log('error: ', response);
      console.log('====================================');
      return Promise.reject(error);
    }
  },
  //error
  function (error) {
    console.log('error: ', error?.response);
    const {message} = error?.response?.data;
    if (
      error?.response?.status === 401 ||
      error?.response?.data?.code === 401
    ) {
      showMessage({
        message: message ? message?.toString() : 'Network Error',
        type: 'danger',
      });
      // store.dispatch(logoutUser());
    } else {
      showMessage({
        message: message ? message?.toString() : error?.message,
        type: 'danger',
      });
    }

    //Hàm log trả về error (Có thể bật và tắt trong file logger)
    describeErrorResponse(error);
    return Promise.reject(message ? message?.toString() : error?.message);
  },
);

export default api;
