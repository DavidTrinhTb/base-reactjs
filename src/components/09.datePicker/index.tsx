import { DatePicker } from 'antd';
import React from 'react';
import { FULL_DATETIME_FORMAT } from 'src/constants/formatters';
import './datepicker.scss';

interface typeProps {
  onChange?: () => void;
  clearIcon?: boolean;
  showToday?: boolean;
  isFullDate?: boolean;
  showTime?: boolean;
  placeholder?: string;
  inputReadOnly?: boolean;
}

const DatePickerComponent: React.FC<typeProps> = ({
  onChange,
  clearIcon = true,
  showToday = false,
  isFullDate = false,
  showTime = false,
  inputReadOnly = false,
  placeholder,
  ...props
}) => {
  return (
    <DatePicker
      format={FULL_DATETIME_FORMAT}
      onChange={onChange}
      className='frac-date-picker'
      clearIcon={clearIcon}
      showToday={showToday}
      placeholder={placeholder}
      showTime={showTime}
      inputReadOnly={inputReadOnly}
      {...props}
    />
  );
};

export default DatePickerComponent;
