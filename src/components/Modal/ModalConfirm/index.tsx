import type { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import cx from 'classnames';

import Button from 'components/Button';

import IconExclamation from 'resources/svg/IconExclamation';

const ModalConfirm: FC<{
  className?: string;
  description?: string | ReactElement;
  warning?: string | ReactElement;
  confirmText?: string;
  cancelText?: string;
  isLoading?: boolean;

  onClose: () => void;
  onConfirm: () => void;
}> = ({
  className,
  description,
  warning,
  confirmText = 'common.yes',
  cancelText = 'common.no',
  isLoading,

  onClose,
  onConfirm,
}) => {
  const { t } = useTranslation();

  return (
    <div className={cx(className)}>
      {description && <p className='text-center'>{typeof description === 'string' ? t(description) : description}</p>}
      {warning && (
        <div className='flex gap-[10px] mt-[20px] color-primary_3 p-[8px] rounded-[8px] bg-primary_2'>
          <IconExclamation className='flex-[1_0_auto]' />
          <div>{typeof warning === 'string' ? t(warning) : warning}</div>
        </div>
      )}
      <div className='flex items-center gap-[20px] mt-[20px]'>
        <Button variant='ghost' size='large' onClick={onClose} loading={isLoading}>
          {t(cancelText)}
        </Button>
        <Button variant='primary' size='large' onClick={onConfirm} loading={isLoading}>
          {t(confirmText)}
        </Button>
      </div>
    </div>
  );
};

export default ModalConfirm;
