import React, { type FC, useEffect, useRef, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import OTPInput from 'react-otp-input';

import cx from 'classnames';

import { type IForgotPassword, type ISubmitOTP, FORM } from 'modules/Authentication/constants';

const OTP_COUNTDOWN_TIME = 60;
const OTP_LENGTH = 6;

const OTPForm: FC<{
  email: string;
  forgotPassword: (formData: IForgotPassword) => Promise<any>;
  submitOTP: (formData: ISubmitOTP) => Promise<void>;
}> = ({ email: forgotPasswordEmail, forgotPassword, submitOTP }) => {
  const { t } = useTranslation();

  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  const [otp, setOtp] = useState('');
  const [countdownTime, setCountdownTime] = useState(OTP_COUNTDOWN_TIME);

  const isDisable = !!countdownTime;

  const startCountdown = () => {
    if (interval.current) {
      return;
    }
    interval.current = setInterval(() => {
      setCountdownTime((prev) => {
        const seconds = prev - 1;

        if (interval.current && seconds === 0) {
          clearInterval(interval.current);
          interval.current = null;
          return 0;
        }

        return seconds;
      });
    }, 1000);
  };

  const onResendOTP = async () => {
    if (interval.current) return;
    try {
      setCountdownTime(OTP_COUNTDOWN_TIME);
      const data = await forgotPassword({ email: forgotPasswordEmail });
      if (data) {
        startCountdown();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onChangeOTP = (otp: string) => {
    setOtp(otp);
    if (otp.length === OTP_LENGTH) {
      submitOTP({
        [FORM.EMAIL]: forgotPasswordEmail,
        [FORM.CODE]: otp,
      });
    }
  };

  useEffect(() => {
    startCountdown();

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
        interval.current = null;
      }
    };
  }, []);

  return (
    <React.Fragment>
      <h5 className='h5'>{t('login.reset_password')}</h5>
      <p className='mb-24'>
        <Trans
          i18nKey={'login.reset_password_desc'}
          components={[<span className='font-bold' key='0' />]}
          values={{ email: forgotPasswordEmail || '' }}
        />
      </p>
      <OTPInput
        value={otp}
        onChange={onChangeOTP}
        numInputs={OTP_LENGTH}
        containerStyle={{ justifyContent: 'center', gap: '20px' }}
        renderInput={(props) => (
          <input
            {...props}
            className='p-12 mx-6 min-w-[50px] max-w-[50px] h-[50px] radius rounded-[12px] border-solid border-border-color color-primary'
          />
        )}
      />
      <strong className='mt-24 block'>{t('login.otp_desc')}</strong>
      <ul>
        <li>{t('login.otp_step_1')}</li>
        <li>{t('login.otp_step_2')}</li>
        <li>{t('login.otp_step_3')}</li>
        <li>{t('login.otp_step_4')}</li>
      </ul>
      <p
        className={cx('font-bold', {
          'cursor-pointer color-#242424': !isDisable,
          'cursor-not-allowed color-#B0BEC5': isDisable,
        })}
        onClick={onResendOTP}
      >
        {t('login.resend')}
        {countdownTime > 0 && (
          <>
            {' >>'} ({countdownTime}s)
          </>
        )}
      </p>
    </React.Fragment>
  );
};

export default OTPForm;
