import { Checkbox } from 'antd';
import React from 'react';
import './styles.scss';

interface typeProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: any) => void;
  children: React.ReactNode;
  value?: any;
  className?: string;
}

const CheckBox = (props: typeProps) => {
  return (
    <Checkbox className='check-box' {...props}>
      {props.children}
    </Checkbox>
  );
};

export default CheckBox;
