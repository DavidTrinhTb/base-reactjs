import { Input, InputProps } from 'antd';
import React from 'react';
import './styles/index.scss';

const KeyToVal = {
  key1: 'default',
  key2: 'focused',
  key3: 'success',
  key4: 'warning',
  key5: 'error',
} as const;

type Keys = keyof typeof KeyToVal;
type Values = typeof KeyToVal[Keys];

export interface IFracInputProps extends InputProps {
  inputType?: Values;
  ref?: any;
}

export const FracInput: React.FC<IFracInputProps> = (props: IFracInputProps) => {
  const { className, inputType = 'default', ref } = props;
  return (
    <Input
      ref={ref}
      className={className ? `${className} ${className}--${inputType}` : `frac-input frac-input--${inputType}`}
      {...props}
    />
  );
};
