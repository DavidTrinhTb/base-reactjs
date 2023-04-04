import { Tooltip } from 'antd';
import { RenderFunction } from 'antd/es/tooltip';
import { TooltipPlacement } from 'antd/lib/tooltip';
import cx from 'classnames';
import React, { ReactNode } from 'react';
import './styles/item-with-tooltip.scss';

const ItemWithTooltip: React.FC<{
  label?: any;
  helpText?: string | ReactNode | RenderFunction;
  labelClassName?: string;
  containerClassName?: string;
  tooltipClassName?: string;
  placement?: TooltipPlacement;
  overlayClassName?: string;
  description?: string;
  children?: any;
  required?: boolean;
  dangerouslySetInnerHTML?: boolean;
}> = ({
  label,
  helpText,
  labelClassName,
  containerClassName,
  tooltipClassName,
  placement,
  overlayClassName,
  description,
  children,
  required = false,
  dangerouslySetInnerHTML = false,
}) => {
  return (
    <div className={cx('item-with-tooltip', containerClassName)}>
      {label && (
        <span className={cx('item-with-tooltip__label', labelClassName)}>
          {label}&nbsp;{required ? <span>*</span> : ''}
          {helpText && (
            <Tooltip
              trigger='click'
              title={dangerouslySetInnerHTML ? <div dangerouslySetInnerHTML={{ __html: `${helpText}` }} /> : helpText}
              overlayClassName={`tooltip ${overlayClassName}`}
              placement={placement || 'right'}
              className={tooltipClassName}
            >
              tooltip
            </Tooltip>
          )}
        </span>
      )}
      {description && <span className='item-with-tooltip__description'>{description}</span>}
      <div className='item-with-tooltip__content'>{children}</div>
    </div>
  );
};

export default ItemWithTooltip;
