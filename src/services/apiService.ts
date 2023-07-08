import { getI18n } from 'react-i18next';

import type { AxiosResponse, GenericAbortSignal, HttpStatusCode } from 'axios';

import showMessage from 'components/Message';
import useAuthenticationStore from 'store/authentication/useAuthenticationStore';

import { HTTP_STATUS_CONSTANTS, TYPE_CONSTANTS } from 'constant';

import axios from './axios';

interface SuccessfulResponse<Data = {}> {
  status: HttpStatusCode;
  data: Data;
}

interface ErrorResponse {
  status: HttpStatusCode;
  data: undefined;
}

export type RequestResponse<Data = {}> = SuccessfulResponse<Data> | ErrorResponse;

class ApiService {
  private HEADERS;
  private EXCLUDED_RESPONSE = ['empty_response'];
  private MESSAGE_TYPE = TYPE_CONSTANTS.MESSAGE;

  constructor() {
    this.HEADERS = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }

  get HEADERS_MULTIPLE_PART() {
    return {
      ...this.HEADERS,
      'Content-Type': 'multipart/form-data; boundary=something',
      Accept: 'application/json',
    };
  }

  private validateStatus(status: number): boolean {
    return status === 200 || status === 201;
  }

  private checkExpiredOrAuthorization(response: any) {
    return HTTP_STATUS_CONSTANTS.ERROR_CODE_401 === response?.status;
  }

  private handleExpiredAuthorization() {
    useAuthenticationStore.getState().actions.setAuthenticationToken('');
  }

  private checkErrorStatus(
    response: any,
    options?: {
      isHideErrorMessage?: any;
    },
  ) {
    if (response?.status >= HTTP_STATUS_CONSTANTS.ERROR && !this.EXCLUDED_RESPONSE.includes(response?.data?.code)) {
      if (HTTP_STATUS_CONSTANTS.SERVER_ERROR !== response?.data?.code) {
        (!options?.isHideErrorMessage && response?.data?.code) ||
          (response?.code &&
            showMessage(
              this.MESSAGE_TYPE.ERROR,
              response?.data?.code ? `message.${response?.data?.code}` : `message.${response?.code}`,
              response?.meta?.extraInfo,
            ));
      } else {
        !options?.isHideErrorMessage &&
          response?.meta?.msg &&
          showMessage(this.MESSAGE_TYPE.ERROR, response?.meta?.msg);
      }
    }
    return response;
  }
  private checkErrorNetwork(err: any) {
    if (err?.toJSON() && err.toJSON().message === 'Network Error') {
      return showMessage(this.MESSAGE_TYPE.ERROR, getI18n()?.t(''));
    }
    return err;
  }

  private handleSuccessRequest({
    response,
    endpoint,
    params,
    options,
  }: {
    response: AxiosResponse<any, any>;
    endpoint: string;
    params: any;
    options: any;
  }) {
    if (this.checkExpiredOrAuthorization(response)) {
      this.handleExpiredAuthorization();
      return this.checkErrorStatus(response?.data, options);
    }
    return this.checkErrorStatus(response, options);
  }
  private handleErrorRequest({ err, options }: { err: any; options: any }) {
    if (this.checkExpiredOrAuthorization(err?.response)) {
      this.handleExpiredAuthorization();
    }

    return this.checkErrorStatus(err?.response, options) || this.checkErrorNetwork(err);
  }

  get<Response = {}>(
    endpoint: string,
    params: any = {},
    options?: any,
    signal?: GenericAbortSignal,
  ): Promise<RequestResponse<Response>> {
    return axios
      .get(endpoint, {
        params,
        headers: this.HEADERS,
        validateStatus: this.validateStatus,
        signal,
      })
      .then(
        (response) => this.handleSuccessRequest({ response, endpoint, params, options }),
        (err) => {
          throw this.handleErrorRequest({ err, options });
        },
      )
      .catch((response) => {
        throw response.data;
      });
  }

  post<Response = {}>(endpoint: string, params?: any, options?: any): Promise<RequestResponse<Response>> {
    return axios
      .post(endpoint, params, {
        headers: this.HEADERS,
        validateStatus: this.validateStatus,
      })
      .then(
        (response) => this.handleSuccessRequest({ response, endpoint, params, options }),
        (err) => {
          throw this.handleErrorRequest({ err, options });
        },
      )
      .catch((response) => {
        throw response.data;
      });
  }

  postMultiplePart(endpoint: string, params?: any, options?: any) {
    return axios
      .post(endpoint, params, {
        headers: this.HEADERS_MULTIPLE_PART,
        validateStatus: this.validateStatus,
      })
      .then(
        (response) => this.handleSuccessRequest({ response, endpoint, params, options }),
        (err) => {
          throw this.handleErrorRequest({ err, options });
        },
      )
      .catch((response) => {
        throw response.data;
      });
  }

  put(endpoint: string, params?: any, options?: any) {
    return axios
      .put(endpoint, params, {
        headers: this.HEADERS,
        validateStatus: this.validateStatus,
      })
      .then(
        (response) => this.handleSuccessRequest({ response, endpoint, params, options }),
        (err) => {
          throw this.handleErrorRequest({ err, options });
        },
      )
      .catch((response) => {
        throw response.data;
      });
  }

  patch(endpoint: string, params?: any, options?: any) {
    return axios
      .patch(endpoint, params, {
        headers: this.HEADERS,
        validateStatus: this.validateStatus,
      })
      .then(
        (response) => this.handleSuccessRequest({ response, endpoint, params, options }),
        (err) => {
          throw this.handleErrorRequest({ err, options });
        },
      )
      .catch((response) => {
        throw response.data;
      });
  }

  patchMultipart(endpoint: string, params?: any, options?: any) {
    return axios
      .patch(endpoint, params, {
        headers: this.HEADERS_MULTIPLE_PART,
        validateStatus: this.validateStatus,
      })
      .then(
        (response) => this.handleSuccessRequest({ response, endpoint, params, options }),
        (err) => {
          throw this.handleErrorRequest({ err, options });
        },
      )
      .catch((response) => {
        throw response.data;
      });
  }

  delete<Response = {}>(endpoint: string, params?: any, options?: any): Promise<RequestResponse<Response>> {
    return axios
      .delete(endpoint, {
        params,
        headers: this.HEADERS,
        validateStatus: this.validateStatus,
      })
      .then(
        (response) => this.handleSuccessRequest({ response, endpoint, params, options }),
        (err) => {
          throw this.handleErrorRequest({ err, options });
        },
      )
      .catch((response) => {
        throw response.data;
      });
  }
}

export default ApiService;
