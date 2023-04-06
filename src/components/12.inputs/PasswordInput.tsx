import React from 'react';
import classnames from 'classnames';
import { InputProps } from 'antd';

import './styles/index.scss';
import Password from 'antd/lib/input/Password';

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
  inputType?: Values;
}

export const PasswordInput: React.FC<typeInput> = (props: typeInput) => {
  const { className, inputType = 'default', ...rest } = props;

  return <Password {...rest} className={classnames(`input-component input-component--${inputType}`, className)} />;
};
