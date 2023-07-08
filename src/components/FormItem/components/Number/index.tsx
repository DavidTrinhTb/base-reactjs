import { ChangeEvent, forwardRef, ForwardRefRenderFunction } from 'react';
import { ControllerRenderProps, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import type { InputAttributes, NumberFormatValues, NumericFormatProps } from 'react-number-format';

import type { InputProps } from 'antd';

import type NumberFormat from 'components/NumberFormat';

import { clearDotValue } from 'utils';

import InputNumberFormat from '../InputNumberFormat';

export type IFormNumber = Omit<NumericFormatProps<InputAttributes & InputProps>, 'onChange' | 'onPressEnter'> & {
  field?: ControllerRenderProps<any, string>;
  placeholder?: string;
  maxLength?: number;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (values: NumberFormatValues) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>, numAsString?: string) => void;
  onPressEnter?: (event: ChangeEvent<HTMLInputElement>, numAsString?: string) => void;
};

const FormNumber: ForwardRefRenderFunction<NumberFormat, IFormNumber> = (
  { field, placeholder, onChange, thousandSeparator, onValueChange, min, max, isAllowed, ...props },
  ref,
) => {
  const { t } = useTranslation();

  const { setValue } = useFormContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>, numAsString = '') => {
    if (onChange) onChange(e, clearDotValue(numAsString));

    if (field?.name) {
      setValue(field.name, clearDotValue(numAsString));
    }

    if (thousandSeparator) {
      return;
    } else {
      field?.onChange(e);
    }
  };

  const handleValueChange = (values: NumberFormatValues) => {
    if (thousandSeparator) {
      setValue(field?.name as string, values.value);

      if (onValueChange) {
        onValueChange(values);
      }
    }
  };

  return (
    <InputNumberFormat
      {...field}
      {...props}
      onChange={handleChange}
      onValueChange={handleValueChange}
      thousandSeparator={thousandSeparator}
      placeholder={placeholder ? t(placeholder) : ''}
      ref={ref}
      isAllowed={(values) => {
        const { floatValue } = values || {};

        let allowed = true;

        if (typeof min === 'number' && typeof max === 'number') {
          allowed = !floatValue || (floatValue >= min && floatValue <= max);
        }

        if (typeof isAllowed === 'function') {
          allowed = isAllowed?.(values);
        }

        return allowed;
      }}
    />
  );
};

export default forwardRef(FormNumber);
