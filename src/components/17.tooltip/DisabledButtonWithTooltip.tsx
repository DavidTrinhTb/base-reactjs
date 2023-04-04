import { Button, Tooltip } from 'antd';
import { ReactNode } from 'react';
import classNames from 'classnames';
import './styles.scss';

type DisabledButtonWithTooltipProps = {
  buttonClassName?: string;
  tooltipClassName?: string;
  buttonText: string | ReactNode;
  tooltipText: string | ReactNode;
};

const DisabledButtonWithTooltip = ({
  buttonText,
  tooltipText,
  buttonClassName,
  tooltipClassName,
}: DisabledButtonWithTooltipProps) => {
  return (
    <Tooltip title={tooltipText} className={tooltipClassName}>
      <Button className={classNames('button-with-tooltip', buttonClassName)} disabled>
        {buttonText}
      </Button>
    </Tooltip>
  );
};
export default DisabledButtonWithTooltip;
