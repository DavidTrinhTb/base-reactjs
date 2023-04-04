import axios, { AxiosResponse } from 'axios';
import { HttpClient } from './http-service';

interface Dict<T> {
  [key: string]: T;
  [key: number]: T;
}

interface DataResult {
  status: number;
  data: any;
  metadata: any;
}

export interface ChangeListener {
  (event: any): any;
}

export class ServiceBase extends HttpClient {
  private onChangeListeners: Dict<ChangeListener> = {};
  getDataResult = (response: AxiosResponse) => {
    const status = response?.status;
    const data = response?.data.data;
    const metadata = response.data?.metadata;
    return { data, metadata, status };
  };

  get = async (url: string, params?: any): Promise<DataResult> => {
    const response = await this.axiosInstance.get(url, { params });
    return this.getDataResult(response);
  };

  getExport = async (url: string, params?: any) => {
    const response = await this.axiosInstance.get(url, { params });
    return response;
  };

  put = async (url: string, data?: any): Promise<DataResult> => {
    const response = await this.axiosInstance.put(url, data);
    return this.getDataResult(response);
  };

  customPut = async (url: string, data: any, config: any): Promise<DataResult> => {
    const response = await axios.put(url, data, config);
    return this.getDataResult(response);
  };

  patch = async (url: string, data: any): Promise<DataResult> => {
    const response = await this.axiosInstance.patch(url, data);
    return this.getDataResult(response);
  };

  post = async (url: string, params: any): Promise<DataResult> => {
    const response = await this.axiosInstance.post(url, params);
    return this.getDataResult(response);
  };

  delete = async (url: string, id: number): Promise<DataResult> => {
    const response = await this.axiosInstance.delete(`${url}/${id}`);
    return this.getDataResult(response);
  };

  deleteByUrl = async (url: string): Promise<DataResult> => {
    const response = await this.axiosInstance.delete(url);
    return this.getDataResult(response);
  };

  deleteByUrlWithBody = async (url: string, body: any): Promise<DataResult> => {
    const response = await this.axiosInstance.delete(url, body);
    return this.getDataResult(response);
  };

  deleteByUrlWithParams = async (url: string, params?: any): Promise<DataResult> => {
    const response = await this.axiosInstance.delete(url, { params });
    return this.getDataResult(response);
  };

  update = async (url: string, id: number | undefined, params: any): Promise<DataResult> => {
    const response = await this.axiosInstance.patch(`${url}/${id}`, params);
    return this.getDataResult(response);
  };

  subscribe(key: string, listener: ChangeListener) {
    if (this.onChangeListeners[key]) return;
    this.onChangeListeners[key] = listener;
  }

  unsubcribe(key: string) {
    delete this.onChangeListeners[key];
  }

  fire(data: any) {
    Object.values(this.onChangeListeners).forEach((listener) => listener(data));
  }
}
