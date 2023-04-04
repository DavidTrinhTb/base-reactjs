import React from 'react';
import './styles/input-search.scss';
import { SearchOutlined } from '@ant-design/icons';
import { IFracInputProps, FracInput } from '.';

interface InputSearchType extends IFracInputProps {}

export const InputSearch: React.FC<InputSearchType> = (props: InputSearchType) => {
  const { placeholder = 'Search' } = props;
  return <FracInput prefix={<SearchOutlined className='icon-search' />} placeholder={placeholder} {...props} />;
};
