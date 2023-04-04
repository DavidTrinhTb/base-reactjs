import { Button, ButtonProps } from 'antd';
import cx from 'classnames';
import React from 'react';
import './styles/button-outlined.scss';

interface IButtonOutLinedProps extends ButtonProps {}

const ButtonOutLined: React.FC<IButtonOutLinedProps> = (props: IButtonOutLinedProps) => {
  const { children, className } = props;
  return (
    <Button className={cx('outlined-default', [className])} {...props}>
      {children}
    </Button>
  );
};

export default ButtonOutLined;
