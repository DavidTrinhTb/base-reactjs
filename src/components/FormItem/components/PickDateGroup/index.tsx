import { type FC, useEffect, useState } from 'react';
import type { ControllerRenderProps } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Radio, RadioChangeEvent, RadioGroupProps } from 'antd';
import generatePicker from 'antd/es/date-picker/generatePicker';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';

import { DATE_TIME_FORMAT } from 'constant';
import CalendarIcon from 'resources/svg/CalendarIcon';
import { convertToISOString, NOW_VALUE_PLACEHOLDER } from 'utils/date';

const DatePicker = generatePicker<Date>(dateFnsGenerateConfig);

const PickDateGroup: FC<
  {
    field?: ControllerRenderProps<any, string>;
    onChange?: (event: Date | string | undefined) => void;
    disabledDate?: (current: Date) => boolean;
    disabledTime?: (current: Date | null) => {
      disabledHours: () => number[];
      disabledMinutes: () => number[];
      disabledSeconds: () => number[];
    };
  } & RadioGroupProps
> = ({ field, onChange, disabledDate, disabledTime, ...props }) => {
  const { t } = useTranslation();

  const [selectedDate, setSelectedDate] = useState<Date | string | undefined>('');

  useEffect(() => {
    setSelectedDate(field?.value || '');
  }, []);

  const onSelectDate = (value: Date | null) => {
    setSelectedDate(convertToISOString(value));

    if (field?.name) field?.onChange(convertToISOString(value));
    if (onChange) onChange(convertToISOString(value));
  };

  const handleChange = (e: RadioChangeEvent) => {
    const value = e.target.value;

    field?.onChange(typeof value !== 'string' ? convertToISOString(value) : value);
    if (onChange) onChange(typeof value !== 'string' ? convertToISOString(value) : value);
  };

  return (
    <Radio.Group className='flex justify-between items-center' {...field} {...props} onChange={handleChange}>
      <Radio value={NOW_VALUE_PLACEHOLDER} className='mr-0'>
        {t('common.now')}
      </Radio>
      <Radio value={selectedDate ? selectedDate : null} className='mr-0'>
        {t('common.pick_a_time')}{' '}
        <DatePicker
          inputReadOnly
          suffixIcon={<CalendarIcon />}
          onChange={onSelectDate}
          className='ml-[12px]'
          disabled={props.disabled}
          showTime
          format={DATE_TIME_FORMAT}
          value={selectedDate ? new Date(selectedDate) : null}
          disabledDate={disabledDate}
          disabledTime={disabledTime && disabledTime}
          showNow={false}
        />
      </Radio>
    </Radio.Group>
  );
};

export default PickDateGroup;
