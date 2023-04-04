import { Switch, SwitchProps } from 'antd';
import './styles/switch-default.scss';

interface ISwitchDefaultProps extends SwitchProps {}

const SwitchDefault: React.FC<ISwitchDefaultProps> = (props: ISwitchDefaultProps) => {
  return (
    <div className="switch-default">
      <Switch {...props} />
    </div>
  );
};

export default SwitchDefault;
