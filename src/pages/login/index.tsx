import React, { useEffect } from 'react';
import _isEmpty from 'lodash/isEmpty';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import ButtonComponent from 'src/components/02.buttons/ButtonComponent';
import { PasswordInput } from 'src/components/12.inputs/PasswordInput';
import { TextInput } from 'src/components/12.inputs/TextInput';
import { STORAGE_KEY } from 'src/constants/storage';
import { storage } from 'src/utils/storage';
import './styles.scss';
import { PATHS } from 'src/constants/paths';
import { useAuth } from 'src/contexts/auth';

interface typeProps {
  email: string | null;
  password: string | null;
}

const defaultValues = {
  email: '',
  password: '',
};

const Login: React.FC<typeProps> = () => {
  const history = useHistory();
  const methods = useForm({ defaultValues });
  const { token, setToken } = useAuth();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (!_isEmpty(token)) history.push(PATHS.DASHBOARD);
  }, [token, history]);

  const onSubmit = (values: any) => {
    const { email, password } = values || {};
    if (email === 'dat.trinhcong.tb@gmail.com' && password === 'av') {
      setToken('accepted');
      storage.set(STORAGE_KEY.ACCESS_TOKEN, 'accepted');
      toast.success('Welcome to Beesi');
    } else {
      toast.error('Email or password invalid');
    }
  };

  return (
    <div className='login-page max-sm:p-4'>
      <div className='login-wrapper'>
        <h1 className='title text-center font-bold mb-12 text-white'>Welcome to Beesi</h1>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
              <label className='mb-2 block font-bold text-white'>Email</label>
              <Controller
                name='email'
                control={control}
                rules={{ required: true }}
                render={({ field }) => <TextInput className='mb-2' {...field} placeholder='Input email' />}
              />
              {errors.email && <span className='text-error'>This field is required</span>}
            </div>
            <div className='mb-8'>
              <label className='mb-2 block font-bold text-white'>Password</label>
              <Controller
                name='password'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <PasswordInput {...field} type='password' className='w-full mb-2' placeholder='Input password' />
                )}
              />
              {errors.password && <span className='text-error'>This field is required</span>}
            </div>
            <ButtonComponent customClassName='w-full mb-6' type='submit' text='Submit' variant='primary' />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Login;
