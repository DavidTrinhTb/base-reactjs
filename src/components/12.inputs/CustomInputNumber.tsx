import { Input } from 'antd';
import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import './styles/custom-input-number.scss';

const CustomInputNumber: FC<{
  placeholder?: string;
  initialValue?: string;
  numberDigitsBefore?: number;
  numberDigitsAfter?: number;
  autoComplete?: string;
  maxLength?: number;
  max?: number | string;
  suffix?: any;
  className?: string;
  disabled?: boolean;
  onInputChanged?: Function;
}> = ({
  placeholder,
  initialValue,
  numberDigitsBefore = 12,
  numberDigitsAfter = 3,
  autoComplete = 'off',
  maxLength = 256,
  max,
  suffix,
  className,
  disabled,
  onInputChanged,
  ...props
}) => {
  const listNumberKey = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const extensionKey = ['ArrowLeft', 'ArrowRight'];
  const backspace = 'Backspace';
  const dot = '.';
  const [value, setValue] = useState('0');

  const formatNumber = (value: number | string) => {
    const splitNumber = String(value).split('.');
    const integerPart = splitNumber[0];
    const decimalPart = splitNumber[1];
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    if (decimalPart) {
      return formattedInteger + '.' + decimalPart;
    }
    return formattedInteger;
  };

  const handleChange = (e: any) => {
    try {
      const value: string = e.target.value.replaceAll(',', '');
      const splitValue = value?.split(dot);
      const dotPosition = value?.indexOf(dot);
      if (value?.indexOf(dot) === 0) {
        setValue('0'.concat('.').concat(splitValue[1].substring(0, numberDigitsAfter)));
        return;
      }
      if (value?.startsWith('0') && !value?.startsWith('0.')) {
        setValue(String(Number(value)));
        return;
      }
      if (splitValue?.length === 1) {
        const handledValue = formatNumber(value.substring(0, numberDigitsBefore));
        setValue(handledValue);
        return;
      } else {
        const handledValue = formatNumber(
          splitValue[0]
            .substring(0, dotPosition < numberDigitsBefore ? dotPosition : numberDigitsBefore)
            .replaceAll(',', ''),
        )
          .concat('.')
          .concat(splitValue[1].substring(0, numberDigitsAfter));
        setValue(handledValue);
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleKeyDown = (e: any) => {
    try {
      const value = e.target.value;
      if (!listNumberKey.includes(e.key) && !extensionKey.includes(e.key) && e.key !== backspace && e.key !== dot) {
        e.preventDefault();
      }
      if (listNumberKey.includes(e.key)) {
      }
      if (e.key === dot) {
        if (value?.indexOf(dot) > -1 || numberDigitsAfter === 0) {
          e.preventDefault();
        }
      }
    } catch (error) {
      console.error(e);
    }
  };

  useEffect(() => {
    setValue(initialValue || '0');
  }, [initialValue]);

  useEffect(() => {
    onInputChanged && onInputChanged(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className={classNames('custom-input-number', className)}>
      <Input
        {...props}
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoComplete={autoComplete}
        maxLength={maxLength}
        suffix={suffix}
        disabled={disabled}
      />
    </div>
  );
};

export default CustomInputNumber;
