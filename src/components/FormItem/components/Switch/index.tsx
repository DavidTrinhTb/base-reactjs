import type { FC } from 'react';
import type { ControllerRenderProps } from 'react-hook-form';

import { Switch } from 'antd';
import type { SwitchChangeEventHandler, SwitchProps } from 'antd/lib/switch';

interface IFormSwitchInput {
  field?: ControllerRenderProps<any, string> | any;
  onChange?: SwitchChangeEventHandler;
}

const SwitchInput: FC<SwitchProps & IFormSwitchInput> = ({ field, onChange, ...props }) => {
  const handleChange: SwitchChangeEventHandler = (e, event) => {
    field?.onChange(e);
    if (onChange) onChange(e, event);
  };

  return <Switch {...field} onChange={handleChange} checked={!!field.value} {...props} />;
};

export default SwitchInput;
