import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class HttpClient {
  axiosInstance: AxiosInstance;

  constructor() {
    const tokenAccess =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6bnVsbCwiaWQiOiI2MzQ0ZGRhNGU5ODE0MGQxNmYzZWViOTIiLCJmdWxsbmFtZSI6IlRoaXMgaXMgdGhlIGFjY291bnQgb2YgT3duZXIiLCJyb2xlIjoiMTAwIiwiaWF0IjoxNjgwNTc4MjY1LCJleHAiOjE2ODA1ODE4NjV9.NQ0rjanl9GykA5PD4fjj4TQpVbCVwgyLIUr5uxatSMU';
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
