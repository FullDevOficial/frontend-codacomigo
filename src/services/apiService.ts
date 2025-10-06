import axios, { AxiosInstance } from 'axios';
/**
 * Axios instance for the API.
 */
const api: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
});

export default api;
