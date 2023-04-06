import { Select, SelectProps } from 'antd';
import './styles.scss';

export type option = { value: string | number; label: string };

interface ISelect extends SelectProps {}

const { Option } = Select;

const SelectComponent: React.FC<ISelect> = (props: ISelect) => {
  const { options = [], className } = props;
  return (
    <Select {...props} className={`${className ? className : 'frac-select'}`}>
      {options?.map((option: any, index: number) => (
        <Option key={index} value={option.value} disabled={option?.disabled}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export default SelectComponent;
