import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import Button from 'components/Button';
import FormItem from 'components/FormItem';
import TextInputPassword from 'components/FormItem/components/TextInputPassword';
import showMessage from 'components/Message';
import { CHAGE_PASSWORD_DEFAULT_VALUE, FORM, IChangePassword } from 'modules/Authentication/constants';
import { changePasswordSchema } from 'modules/Authentication/constants/schema';
import useLogin from 'modules/Authentication/hooks/useLogin';

import { LENGTH_CONSTANTS, TYPE_CONSTANTS } from 'constant';

const ChangePasswordForm: React.FC<{ email: string | undefined; onChangeSuccess: Function }> = ({
  email,
  onChangeSuccess,
}) => {
  const { t } = useTranslation();

  const changePasswordContext = useForm({
    defaultValues: CHAGE_PASSWORD_DEFAULT_VALUE,
    resolver: zodResolver(changePasswordSchema(t)),
  });
  const { handleSubmit: handleChangePassword } = changePasswordContext;

  const { isLoading, changePassword } = useLogin();

  const onChangePassword = async (formData: IChangePassword) => {
    const values = { ...formData, email: email };
    try {
      const data = await changePassword(values);
      if (data) {
        onChangeSuccess();
        showMessage(TYPE_CONSTANTS.MESSAGE.SUCCESS, 'message.change_password_success');
      }
    } catch (e) {
      showMessage(TYPE_CONSTANTS.MESSAGE.ERROR, 'message.E0');
    }
  };

  return (
    <FormProvider {...changePasswordContext}>
      <form className='form-container' onSubmit={handleChangePassword(onChangePassword)}>
        <FormItem name={FORM.PASSWORD} label={t('label.current_password')} required containerClassName='mb-20'>
          <TextInputPassword
            maxLength={LENGTH_CONSTANTS.MAX_LENGTH_PASSWORD}
            placeholder={t('label.current_password_placeholder')}
          />
        </FormItem>

        <FormItem name={FORM.NEW_PASSWORD} label={t('label.new_password')} required containerClassName='mb-20'>
          <TextInputPassword
            maxLength={LENGTH_CONSTANTS.MAX_LENGTH_PASSWORD}
            placeholder={t('label.new_password_placeholder')}
          />
        </FormItem>

        <FormItem name={FORM.CONFIRM_PASSWORD} label={t('label.re_enter_password')} required>
          <TextInputPassword
            maxLength={LENGTH_CONSTANTS.MAX_LENGTH_PASSWORD}
            placeholder={t('label.re_enter_password_placeholder')}
          />
        </FormItem>

        <Button variant='primary' size='large' loading={isLoading} htmlType='submit' className='my-24'>
          {t('header.change_password')}
        </Button>
      </form>
    </FormProvider>
  );
};

export default ChangePasswordForm;
