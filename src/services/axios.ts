import axios from 'axios';

import useAuthenticationStore from 'store/authentication/useAuthenticationStore';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

axios.interceptors.request.use(
  function (axios_config: any) {
    const token = useAuthenticationStore.getState().authenticationToken;

    axios_config.headers.Authorization = `Bearer ${token}`;
    return axios_config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axios;
