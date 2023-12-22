import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import FormItem from 'components/FormItem';
import FormDatePicker from 'components/FormItem/components/DatePicker';

const HomePageContainer: React.FC = () => {
  const methods = useForm();

  const { watch } = methods;

  return (
    <React.Fragment>
      <div>{`Select date: ${watch('date')}`}</div>
      <FormProvider {...methods}>
        <FormItem name='date'>
          <FormDatePicker />
        </FormItem>
      </FormProvider>
    </React.Fragment>
  );
};

export default HomePageContainer;
