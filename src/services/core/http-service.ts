import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { STORAGE_KEY } from 'src/constants/storage';
import { storage } from 'src/utils/storage';

export class HttpClient {
  axiosInstance: AxiosInstance;

  constructor() {
    const tokenAccess = storage.get(STORAGE_KEY.ACCESS_TOKEN) || '';
    let configs: AxiosRequestConfig = {
      baseURL: process.env.REACT_APP_API_ENDPOINT,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + tokenAccess,
      },
      timeout: 30000,
      transformRequest: [
        (data, headers) => {
          if (data instanceof FormData) {
            if (headers) {
              delete headers['Content-Type'];
            }
            return data;
          }
          return JSON.stringify(data);
        },
      ],
    };

    this.axiosInstance = axios.create(configs);
  }
}
