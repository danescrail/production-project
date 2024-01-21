import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

const baseUrl = __API__;

export const $api = axios.create({
    baseURL: baseUrl
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
    }

    return config;
});