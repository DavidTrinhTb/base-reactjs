import { type FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import { ROUTE_URL } from 'routes';

import Button from 'components/Button';
import FormItem from 'components/FormItem';
import TextInput from 'components/FormItem/components/TextInput';
import TextInputPassword from 'components/FormItem/components/TextInputPassword';
import showMessage from 'components/Message';
import {
  FORGOT_PASSWORD_DEFAULT_VALUE,
  FORM,
  IForgotPassword,
  IResetPassword,
  ISubmitOTP,
  LOGIN_DEFAULT_VALUE,
  MODE,
  RESET_PASSWORD_DEFAULT_VALUE,
} from 'modules/Authentication/constants';
import { forgotPasswordSchema, loginSchema, resetPasswordSchema } from 'modules/Authentication/constants/schema';
import useLogin from 'modules/Authentication/hooks/useLogin';
import { useGetAuthenticationToken } from 'store/authentication/selector';

import { LENGTH_CONSTANTS, TYPE_CONSTANTS } from 'constant';
import IconArrowLeft from 'resources/svg/IconArrowLeft';

import OTP from '../OTP';

const LoginForm: FC = () => {
  const { t } = useTranslation();
  const authenticationToken = useGetAuthenticationToken();

  const [mode, setMode] = useState(MODE.LOGIN);

  const loginFormContext = useForm({
    defaultValues: LOGIN_DEFAULT_VALUE,
    resolver: zodResolver(loginSchema(t)),
  });
  const { handleSubmit: handleLogin } = loginFormContext;

  const forgotPasswordContext = useForm({
    defaultValues: FORGOT_PASSWORD_DEFAULT_VALUE,
    resolver: zodResolver(forgotPasswordSchema(t)),
  });
  const { handleSubmit: handleForgotPassword, watch: watchForgotPassword } = forgotPasswordContext;
  const forgotPasswordEmail = watchForgotPassword(FORM.EMAIL);

  const resetPasswordContext = useForm({
    defaultValues: RESET_PASSWORD_DEFAULT_VALUE,
    resolver: zodResolver(resetPasswordSchema(t)),
  });
  const { handleSubmit: handleResetPassword, setValue: setResetPasswordValue } = resetPasswordContext;

  const { isLoading, login, forgotPassword, submitOTP, resetPassword } = useLogin();

  const onForgotPassword = async (formData: IForgotPassword) => {
    const data = await forgotPassword(formData);
    if (data) {
      setResetPasswordValue(FORM.EMAIL, formData?.[FORM.EMAIL]);
      setMode(MODE.OTP);
    }
  };

  const onSubmitOTP = async (formData: ISubmitOTP) => {
    try {
      const data = await submitOTP({
        [FORM.EMAIL]: formData?.[FORM.EMAIL],
        [FORM.CODE]: formData?.[FORM.CODE],
      });
      if (data) {
        setMode(MODE.RESET_PASSWORD);
      }
    } catch (e) {
      showMessage(TYPE_CONSTANTS.MESSAGE.ERROR, 'message.E0');
    }
  };

  const onResetPassword = async (formData: IResetPassword) => {
    try {
      const data = await resetPassword({
        ...formData,
        [FORM.EMAIL]: forgotPasswordEmail,
      });
      if (data) {
        setMode(MODE.LOGIN);
        showMessage(TYPE_CONSTANTS.MESSAGE.SUCCESS, 'message.reset_password_success');
      }
    } catch (e) {
      showMessage(TYPE_CONSTANTS.MESSAGE.ERROR, 'message.E0');
    }
  };

  if (authenticationToken) return <Navigate to={ROUTE_URL.HOME} />;

  return (
    <section>
      {mode === MODE.LOGIN && (
        <FormProvider {...loginFormContext}>
          <h5 className='h5 text-center mb-24'>{t('login.login')}</h5>
          <form className='form-container' onSubmit={handleLogin(login)}>
            <FormItem name={FORM.EMAIL} label={t('label.email')} required containerClassName='mb-48'>
              <TextInput placeholder={t('label.email_placeholder')} />
            </FormItem>
            <FormItem
              name={FORM.PASSWORD}
              label={
                <div className='flex justify-between items-center'>
                  <div>
                    {t('label.password')}
                    <span> *</span>
                  </div>

                  <div className='cursor-pointer color-primary' onClick={() => setMode(MODE.FORGOT_PASSWORD)}>
                    {t('login.forgot_password')}?
                  </div>
                </div>
              }
            >
              <TextInputPassword
                placeholder={t('label.password_placeholder')}
                maxLength={LENGTH_CONSTANTS.MAX_LENGTH_PASSWORD}
              />
            </FormItem>

            <Button variant='primary' size='large' loading={isLoading} htmlType='submit' className='mt-48'>
              {t('login.login')}
            </Button>
          </form>
        </FormProvider>
      )}

      {mode === MODE.FORGOT_PASSWORD && (
        <FormProvider {...forgotPasswordContext}>
          <h5 className='h5'>{t('login.forgot_password')}</h5>
          <p className='mb-24 color-#B0BEC5'>{t('login.forgot_password_desc')}</p>

          <form className='form-container' onSubmit={handleForgotPassword(onForgotPassword)}>
            <FormItem name={FORM.EMAIL} label={t('label.email')} required>
              <TextInput placeholder={t('label.email_placeholder')} />
            </FormItem>

            <Button variant='primary' size='large' loading={isLoading} htmlType='submit' className='mt-48 mb-24'>
              {t('common.confirm')}
            </Button>

            <div className='color-primary cursor-pointer text-center' onClick={() => setMode(MODE.LOGIN)}>
              <IconArrowLeft /> {t('login.back_to_login')}
            </div>
          </form>
        </FormProvider>
      )}

      {mode === MODE.OTP && <OTP email={forgotPasswordEmail} forgotPassword={forgotPassword} submitOTP={onSubmitOTP} />}

      {mode === MODE.RESET_PASSWORD && (
        <FormProvider {...resetPasswordContext}>
          <h5 className='h5'>{t('login.reset_password')}</h5>
          <p className='mb-24 color-#B0BEC5'>{t('login.reset_password_desc_2')}</p>

          <form className='form-container' onSubmit={handleResetPassword(onResetPassword)}>
            <FormItem name={FORM.NEW_PASSWORD} label={t('label.new_password')} required containerClassName='mb-48'>
              <TextInputPassword
                placeholder={t('label.new_password_placeholder')}
                maxLength={LENGTH_CONSTANTS.MAX_LENGTH_PASSWORD}
              />
            </FormItem>

            <FormItem name={FORM.CONFIRM_PASSWORD} label={t('label.re_enter_password')} required>
              <TextInputPassword
                placeholder={t('label.re_enter_password_placeholder')}
                maxLength={LENGTH_CONSTANTS.MAX_LENGTH_PASSWORD}
              />
            </FormItem>

            <Button variant='primary' size='large' loading={isLoading} htmlType='submit' className='mt-48 mb-24'>
              {t('login.reset_password')}
            </Button>
          </form>
        </FormProvider>
      )}
    </section>
  );
};

export default LoginForm;
