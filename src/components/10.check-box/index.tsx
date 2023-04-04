import { Checkbox } from 'antd';
import React from 'react';
import './styles.scss';

interface ICheckBoxFrac {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: any) => void;
  children: React.ReactNode;
  value?: any;
  className?: string;
}

const CheckBoxFrac = (props: ICheckBoxFrac) => {
  return (
    <Checkbox className='check-box-frac' {...props}>
      {props.children}
    </Checkbox>
  );
};

export default CheckBoxFrac;
