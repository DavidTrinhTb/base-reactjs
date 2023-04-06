import React from 'react';
import classnames from 'classnames';
import { Input, InputProps } from 'antd';

import './styles/index.scss';

const KeyToVal = {
  DEFAULT: 'default',
  FOCUSED: 'focused',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
} as const;

type Keys = keyof typeof KeyToVal;
type Values = typeof KeyToVal[Keys];

export interface typeInput extends InputProps {
  ref?: any;
  inputType?: Values;
}

export const TextInput: React.FC<typeInput> = (props: typeInput) => {
  const { className, inputType = 'default', ref, ...rest } = props;

  return (
    <Input {...rest} ref={ref} className={classnames(`input-component input-component--${inputType}`, className)} />
  );
};
