import React from 'react';
import { Button } from 'antd';
import './styles/button-component.scss';
import cx from 'classnames';

declare const ButtonVarients: ['default', 'primary', 'secondary', 'light', 'confirm'];
declare type ButtonVarient = typeof ButtonVarients[number];

type ButtonComponentProps = {
  variant?: ButtonVarient | undefined;
  prefixIcon?: any;
  afterIcon?: any;
  customClassName?: string | undefined;
  onClick?: any;
  onBlur?: any;
  text?: any;
  disabled?: any;
  type?: any;
  loading?: boolean;
  href?: string;
};

function ButtonComponent({
  variant,
  prefixIcon,
  afterIcon,
  text,
  type,
  customClassName,
  loading,
  disabled,
  ...props
}: ButtonComponentProps) {
  return (
    <Button
      {...props}
      disabled={disabled}
      loading={loading}
      className={cx(`button button--${variant}`, [customClassName])}
      htmlType={type}
    >
      {prefixIcon}
      <span>{text}</span>
      {afterIcon}
    </Button>
  );
}

export default ButtonComponent;
