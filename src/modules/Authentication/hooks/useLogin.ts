import { useState } from 'react';
import { getI18n } from 'react-i18next';

import showMessage from 'components/Message';
import { authService } from 'services/authService';
import { useGetAuthenticationActions } from 'store/authentication/selector';

import { HTTP_STATUS_CONSTANTS, TYPE_CONSTANTS } from 'constant';
import { ERROR_CODE } from 'constant/errorCode';
import { stripEmptyValue } from 'utils';
import to from 'utils/promise';

import type { IChangePassword, IForgotPassword, ILogin, IResetPassword, ISubmitOTP } from '../constants';
import { IUser, UserDTO } from '../constants/dto';

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { setUser, setAuthenticationToken } = useGetAuthenticationActions();

  const login = async (formData: ILogin) => {
    setIsLoading(true);
    const [err, response] = await to(authService.login<ILogin, IUser>(stripEmptyValue<ILogin>(formData)), null, () => {
      setIsLoading(false);
    });
    if (err) {
      if (err.error_code === ERROR_CODE.E_USER_NOT_FOUND) {
        return showMessage(TYPE_CONSTANTS.MESSAGE.ERROR, 'message.E10');
      }
      return showMessage(TYPE_CONSTANTS.MESSAGE.ERROR, 'message.E11');
    }
    if (response?.status === HTTP_STATUS_CONSTANTS?.OK) {
      setUser(new UserDTO(response?.data?.user));
      setAuthenticationToken(response.data?.access_token);
    }
  };

  const forgotPassword = async (formData: IForgotPassword) => {
    setIsLoading(true);
    const [err, response] = await to(
      authService.forgotPassword<IForgotPassword>(stripEmptyValue<IForgotPassword>(formData)),
      null,
      () => {
        setIsLoading(false);
      },
    );
    if (err) {
      showMessage(TYPE_CONSTANTS.MESSAGE.ERROR, 'message.E10');
      return;
    }
    if (response?.status === HTTP_STATUS_CONSTANTS?.OK) {
      return response?.data;
    }
  };

  const resendOTP = async (formData: IForgotPassword) => {
    setIsLoading(true);
    const [err, response] = await to(
      authService.resendOTP<IForgotPassword>(stripEmptyValue<IForgotPassword>(formData)),
      null,
      () => {
        setIsLoading(false);
      },
    );
    if (err) {
      console.log('err', err);
    }
    if (response?.status === HTTP_STATUS_CONSTANTS?.OK) {
      return response?.data;
    }
  };

  const submitOTP = async (formData: ISubmitOTP) => {
    setIsLoading(true);
    const [err, response] = await to(
      authService.submitOTP<ISubmitOTP>(stripEmptyValue<ISubmitOTP>(formData)),
      null,
      () => {
        setIsLoading(false);
      },
    );
    if (err) {
      showMessage(
        TYPE_CONSTANTS.MESSAGE.ERROR,
        getI18n()?.t('message.E7', { field: getI18n()?.t('login.verify_otp') }),
      );
    }
    if (response?.status === HTTP_STATUS_CONSTANTS?.OK) {
      return response?.data;
    }
  };

  const resetPassword = async (formData: IResetPassword) => {
    setIsLoading(true);

    const [err, response] = await to(
      authService.resetPassword<IResetPassword>(stripEmptyValue<IResetPassword>(formData)),
      null,
      () => {
        setIsLoading(false);
      },
    );

    if (err) {
      console.log(err);
    }

    if (response?.status === HTTP_STATUS_CONSTANTS?.OK) {
      return response?.data;
    }
  };

  const changePassword = async (formData: IChangePassword) => {
    setIsLoading(true);

    const [err, response] = await to(
      authService.changePassword<IChangePassword>(stripEmptyValue<IChangePassword>(formData)),
      null,
      () => {
        setIsLoading(false);
      },
    );

    if (err) {
      if (err.error_code === ERROR_CODE.E_INVALID_PARAMS) {
        return showMessage(
          TYPE_CONSTANTS.MESSAGE.ERROR,
          getI18n()?.t('message.E7', { field: getI18n()?.t('label.current_password') }),
        );
      }
    }

    if (response?.status === HTTP_STATUS_CONSTANTS?.OK) {
      return response?.data;
    }
  };

  return {
    isLoading,

    login,
    forgotPassword,
    resendOTP,
    resetPassword,
    submitOTP,
    changePassword,
  };
};

export default useLogin;
