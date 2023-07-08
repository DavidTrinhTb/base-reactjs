import type { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import debounce from 'lodash/debounce';
import { ZodIssueCode } from 'zod';

import FormItem, { IFormItem } from 'components/FormItem';

import { SEARCH_TIME } from 'constant';
import { isLessThanOrEqualTo } from 'utils';

import FormNumber, { IFormNumber } from '../Number';

export type IRangeInput = {
  minInput: { name: string } & IFormNumber & IFormItem;
  maxInput: { name: string } & IFormNumber & IFormItem;
  debounceTime?: number;
  onSubmit?: () => void;
};

const RangeInput: FC<IRangeInput> = ({ minInput, maxInput, debounceTime = SEARCH_TIME, onSubmit }) => {
  const { t } = useTranslation();

  const { setValue, watch, trigger, setError } = useFormContext();

  const minValue = watch(minInput.name);
  const maxValue = watch(maxInput.name);

  const onChangeMinInput = (_e: any, valueAsNumber: string | undefined) => {
    if (!maxValue || !isLessThanOrEqualTo(valueAsNumber, maxValue)) {
      setError(maxInput.name, {
        message: t('message.E7', { field: t('common.max_limit') }),
        type: ZodIssueCode.custom,
      });
      setError(minInput.name, {
        message: '',
        type: ZodIssueCode.custom,
      });
      return;
    }

    trigger(maxInput.name);
    trigger(minInput.name);
    setValue(minInput.name, valueAsNumber);
    if (typeof onSubmit === 'function') debounce(onSubmit, debounceTime);
  };

  const onChangeMaxInput = (_e: any, valueAsNumber: string | undefined) => {
    if (!minValue || !isLessThanOrEqualTo(minValue, valueAsNumber)) {
      setError(minInput.name, {
        message: t('message.E7', { field: t('common.min_limit') }),
        type: ZodIssueCode.custom,
      });
      setError(maxInput.name, {
        message: '',
        type: ZodIssueCode.custom,
      });
      return;
    }

    trigger(maxInput.name);
    trigger(minInput.name);
    setValue(maxInput.name, valueAsNumber);
    if (typeof onSubmit === 'function') debounce(onSubmit, debounceTime);
  };

  return (
    <div className='flex gap-[10px] justify-between w-100%'>
      <FormItem name={minInput.name} containerClassName='flex-[50%]' showError={minInput.showError}>
        <FormNumber
          thousandSeparator
          placeholder={minInput.placeholder || 'common.from'}
          {...minInput}
          onPressEnter={onChangeMinInput}
          onChange={onChangeMinInput}
        />
      </FormItem>
      <FormItem name={maxInput.name} containerClassName='flex-[50%]' showError={maxInput.showError}>
        <FormNumber
          thousandSeparator
          placeholder={maxInput.placeholder || 'common.to'}
          {...maxInput}
          onPressEnter={onChangeMaxInput}
          onChange={onChangeMaxInput}
        />
      </FormItem>
    </div>
  );
};

export default RangeInput;
