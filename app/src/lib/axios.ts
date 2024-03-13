import { API_URL } from '@/config';
import Axios, { InternalAxiosRequestConfig } from 'axios';

const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
    config.headers.Accept = 'application/json';
    return config;
};

//インスタンスを作成
export const axios = Axios.create({
    baseURL: API_URL,
});

//インスタンスに設定を追加
axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
    (response) => response.data,
    (error) => {
        const message = error.response?.data?.message || error.message;
        alert(message);

        return Promise.reject(message);
    }
);
