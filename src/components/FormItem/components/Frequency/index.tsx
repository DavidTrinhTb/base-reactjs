import { type ChangeEvent, type FC, useEffect, useState } from 'react';
import type { ControllerRenderProps } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import type { InputAttributes, NumericFormatProps } from 'react-number-format';

import { InputProps, Select } from 'antd';

import { getOrderAmountInputConstraint } from 'modules/BotManagement/utils';

import IconDropdown from 'resources/svg/IconDropdown';

import InputNumberFormat from '../InputNumberFormat';

import { convertFrequency, FREQUENCIES } from './utils';

type IFrequency = {
  field?: ControllerRenderProps<any, string>;
  maxLength?: number;
  className?: string;
  decimalScale?: number;
};

const FormFrequency: FC<
  Omit<NumericFormatProps<InputAttributes & InputProps>, 'onChange' | 'onPressEnter'> & IFrequency
> = ({ field, placeholder, disabled, ...props }) => {
  const { t } = useTranslation();

  const [inputValue, setInputValue] = useState<any>('');
  const [frequencyValue, setFrequencyValue] = useState(FREQUENCIES[0].value);

  useEffect(() => {
    if (field?.value) {
      const { value, frequency } = convertFrequency(field.value);

      setInputValue(value);
      setFrequencyValue(frequency);
    }
  }, []);

  const calculateValue = (inputValue: string, frequencyValue: number) => {
    const value = inputValue && frequencyValue ? parseFloat(inputValue) * frequencyValue : '';

    field?.onChange(value.toString());
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    setInputValue(value);
    calculateValue(value, frequencyValue);
  };

  const handleChangeFrequency = (value: number) => {
    setFrequencyValue(value);
    calculateValue(inputValue, value);
  };

  return (
    <InputNumberFormat
      placeholder={placeholder ? t(placeholder) : ''}
      {...field}
      onChange={handleChange}
      value={inputValue}
      thousandSeparator
      disabled={disabled}
      isAllowed={getOrderAmountInputConstraint(2, 1)}
      addonAfter={
        <Select
          value={frequencyValue}
          options={FREQUENCIES.map(({ label, ...rest }) => ({ label: t(label), ...rest }))}
          disabled={disabled}
          suffixIcon={<IconDropdown />}
          onChange={handleChangeFrequency}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        />
      }
      {...props}
    />
  );
};

export default FormFrequency;
