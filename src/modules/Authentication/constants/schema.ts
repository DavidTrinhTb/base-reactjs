import { z } from 'zod';

import { emailRegex, passwordRegex } from 'constant';

export const loginSchema = (t: any) =>
  z.object({
    email: z
      .string()
      .min(1, { message: t('message.E1', { field: t('label.email') }) })
      .regex(emailRegex, t('message.E2', { field: t('label.email') })),
    password: z.string().min(1, { message: t('message.E1', { field: t('label.password') }) }),
  });

export const forgotPasswordSchema = (t?: any) =>
  z.object({
    email: z
      .string()
      .min(1, { message: t('message.E1', { field: t('label.email') }) })
      .regex(emailRegex, t('message.E2', { field: t('label.email') })),
  });

export const resetPasswordSchema = (t?: any) =>
  z
    .object({
      new_password: z
        .string()
        .min(1, { message: t('message.E1', { field: t('label.new_password') }) })
        .regex(passwordRegex, t('message.E3')),
      new_password_confirmation: z
        .string()
        .min(1, { message: t('message.E1', { field: t('label.re_enter_password') }) }),
    })
    .refine(({ new_password_confirmation, new_password }) => new_password_confirmation === new_password, {
      message: t('message.E4'),
      path: ['new_password_confirmation'],
    });

export const changePasswordSchema = (t?: any) =>
  z
    .object({
      password: z.string().min(1, { message: t('message.E1', { field: t('label.current_password') }) }),
      new_password: z
        .string()
        .min(1, { message: t('message.E1', { field: t('label.new_password') }) })
        .regex(passwordRegex, t('message.E3')),
      new_password_confirmation: z
        .string()
        .min(1, { message: t('message.E1', { field: t('label.re_enter_password') }) }),
    })
    .refine(({ password, new_password }) => password !== new_password, {
      message: t('message.E26'),
      path: ['new_password'],
    })
    .refine(({ new_password, new_password_confirmation }) => new_password === new_password_confirmation, {
      message: t('message.E4'),
      path: ['new_password_confirmation'],
    });
