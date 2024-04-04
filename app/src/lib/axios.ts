import Axios, { InternalAxiosRequestConfig } from 'axios';
import { API_URL } from '@/config';
import storage from '@/utils/storage';

const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
    const token = storage.getToken();
    if (token) {
        config.headers.Authorization = `${token}`;
    }

    //デフォルトのContent-Typeを設定
    config.headers['Content-Type'] = 'application/json';

    // ファイルアップロードの場合はContent-Typeを削除
    if (config.data instanceof FormData) {
        delete config.headers['Content-Type'];
    }

    return config;
};

//インスタンスを作成
export const axios = Axios.create({
    baseURL: API_URL,
});

//インスタンスに設定を追加
axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        const message = error.response?.data?.ErrorMessageJP || error.message;
        alert(message);

        return Promise.reject(message);
    }
);
