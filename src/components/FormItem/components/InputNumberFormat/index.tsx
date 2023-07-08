import { ChangeEvent, forwardRef, ForwardRefRenderFunction } from 'react';
import type { InputAttributes, NumericFormatProps } from 'react-number-format';

import { Input, InputProps } from 'antd';
import cx from 'classnames';

import NumberFormat from 'components/NumberFormat';

import { LENGTH_CONSTANTS } from 'constant';

export type IFormNumber = Omit<NumericFormatProps<InputAttributes & InputProps>, 'onChange' | 'onPressEnter'> & {
  thousandSeparator?: boolean | string;
  onChange?: (event: ChangeEvent<HTMLInputElement>, numAsString?: string) => void;
  onPressEnter?: (event: ChangeEvent<HTMLInputElement>, numAsString?: string) => void;
};

const InputNumberFormat: ForwardRefRenderFunction<NumberFormat, IFormNumber> = ({
  maxLength = LENGTH_CONSTANTS.MAX_LENGTH_INPUT,
  addonAfter,
  addonBefore,
  className,
  disabled,
  ...props
}) => (
  <NumberFormat
    customInput={Input as any}
    allowNegative={false}
    maxLength={maxLength}
    disabled={disabled}
    addonBefore={addonBefore ? <div>{addonBefore}</div> : ''}
    addonAfter={addonAfter ? <div>{addonAfter}</div> : ''}
    className={cx(className, {
      'addon-after': !!addonAfter,
      disabled,
    })}
    {...props}
  />
);

export default forwardRef(InputNumberFormat);
