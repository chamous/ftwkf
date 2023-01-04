import axios from 'axios';
import { baseUrl } from './api-constants';

const cancelToken = axios.CancelToken;
const source = cancelToken.source();
const Interceptor = axios.create({
  baseURL: baseUrl,
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
  cancelToken: source.token,
});

Interceptor.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    //console.log('token : ' + token);
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config
  },
  (error) => {
    setTimeout(() => {
      // Toast.show(error?.message);
    }, 500);
    return Promise.reject(error);
  },
);

Interceptor.interceptors.response.use(
  (response) => {
    if (response.data.success === false) {
      setTimeout(() => {
        console.log('success response false', response?.data?.message);
        // Toast.show(response?.data?.message);
      }, 500);
      throw new Error(response?.data?.message);
    }
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    if (!error.response) {
      setTimeout(() => {
        console.log('response failed : ', 'Network Error');
        // Toast.show(i18n.language === 'ar' ? 'خطأ في الاتصال' : 'Network Error');
      }, 500);
      return Promise.reject(
        'Network Error',
      );
    } if (error.response.status === 401) {
      setTimeout(() => {
        console.log('401', error?.response?.data?.message);
        // Toast.show(error?.response?.data?.message);
      }, 500);

      // AsyncStorage.removeItem('token');
      return Promise.reject('Network Error');
    } if (error?.response?.status === 400) {
      setTimeout(() => {
        console.log('400 : ', error?.response?.data?.message);
        // Toast.show(error?.response?.data?.message);
      }, 500);
    } else if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      // return refreshMyToken()
      //   .then(token => {
      //     originalRequest.headers.Authorization = 'Bearer ' + token;
      //     return Interceptor(originalRequest);
      //   })
      //   .catch(err => err);
    } else {
      setTimeout(() => {
        console.log('error : ', error?.message);
        // Toast.show(error?.message);
      }, 500);
      throw error.response;
    }
  },
);

export default Interceptor;

