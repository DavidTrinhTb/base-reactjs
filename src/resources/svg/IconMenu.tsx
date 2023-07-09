import type { FC } from 'react';

import cx from 'classnames';

const IconMemu: FC<{ className: string; onClick: any }> = ({ className, ...props }) => (
  <svg
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={cx(className)}
    {...props}
  >
    <rect opacity='0.01' width='32' height='32' fill='#FF963C' />
    <path d='M3 8H29' stroke='#FF963C' strokeWidth='3' />
    <path d='M3 16H29' stroke='#FF963C' strokeWidth='3' />
    <path d='M3 24H29' stroke='#FF963C' strokeWidth='3' />
  </svg>
);

export default IconMemu;
