import type { FC, PropsWithChildren } from 'react';

import cx from 'classnames';

import type { IFormItem } from 'components/FormItem';

const FormItemHorizontal: FC<PropsWithChildren<{ label?: string } & Omit<IFormItem, 'name'>>> = ({
  label,
  containerClassName,
  labelClassName,
  children,
  required,
  labelTooltip,
}) => (
  <div className={cx('form-item--horizontal flex items-center', containerClassName)}>
    {label && (
      <div className={cx('form-item__label', labelClassName)}>
        {label} {required ? <span> *</span> : ''} {labelTooltip ?? ''}
      </div>
    )}
    {children}
  </div>
);

export default FormItemHorizontal;
