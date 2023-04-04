import { Select } from 'antd';
import React, { useState } from 'react';
import './PageSize.scss';

const PageSize: React.FC<{ defaultValue?: number; onChange?: () => void }> = ({ defaultValue = 10, onChange }) => {
  const [values, setValues] = useState<number>(defaultValue);

  const pageSizeOptions = [
    { label: '10 / page', value: 10 },
    { label: '20 / page', value: 20 },
    { label: '50 / page', value: 50 },
  ];

  const _onChange = (values: any) => {
    setValues(values);
    if (onChange) _onChange(values);
  };

  return <Select className='page-size-wrapper' options={pageSizeOptions} defaultValue={values} onChange={_onChange} />;
};

export default PageSize;
