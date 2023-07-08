import { z } from 'zod';

export const FORM = {
  EMAIL: 'email',
  PASSWORD: 'password',
  CODE: 'code',
  NEW_PASSWORD: 'new_password',
  CONFIRM_PASSWORD: 'new_password_confirmation',
} as const;

//Login
const LoginSchema = z.object({
  [FORM.EMAIL]: z.string(),
  [FORM.PASSWORD]: z.string(),
});

export type ILogin = z.infer<typeof LoginSchema>;

export const LOGIN_DEFAULT_VALUE: ILogin = {
  [FORM.EMAIL]: '',
  [FORM.PASSWORD]: '',
};

//Forgot password
const ForgotPasswordSchema = z.object({
  [FORM.EMAIL]: z.string(),
});

export type IForgotPassword = z.infer<typeof ForgotPasswordSchema>;

export const FORGOT_PASSWORD_DEFAULT_VALUE: IForgotPassword = {
  [FORM.EMAIL]: '',
};

//Submit OTP
const SubmitOTP = z.object({
  [FORM.EMAIL]: z.string(),
  [FORM.CODE]: z.string(),
});

export type ISubmitOTP = z.infer<typeof SubmitOTP>;

//Reset password
const ResetPassword = z.object({
  [FORM.PASSWORD]: z.string(),
  [FORM.CONFIRM_PASSWORD]: z.string(),
  [FORM.EMAIL]: z.string(),
});

export type IResetPassword = z.infer<typeof ResetPassword>;

export const RESET_PASSWORD_DEFAULT_VALUE: IResetPassword = {
  [FORM.PASSWORD]: '',
  [FORM.CONFIRM_PASSWORD]: '',
  [FORM.EMAIL]: '',
};

//Change password
const ChangePasswordSchema = z.object({
  [FORM.PASSWORD]: z.string(),
  [FORM.NEW_PASSWORD]: z.string(),
  [FORM.CONFIRM_PASSWORD]: z.string(),
});

export type IChangePassword = z.infer<typeof ChangePasswordSchema>;

export const CHAGE_PASSWORD_DEFAULT_VALUE: IChangePassword = {
  [FORM.PASSWORD]: '',
  [FORM.NEW_PASSWORD]: '',
  [FORM.CONFIRM_PASSWORD]: '',
};

export const MODE = {
  LOGIN: 'LOGIN',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  OTP: 'OTP',
  RESET_PASSWORD: 'RESET_PASSWORD',
};
