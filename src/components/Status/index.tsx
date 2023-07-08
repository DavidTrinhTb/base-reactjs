import { useTranslation } from 'react-i18next';

import cx from 'classnames';

function Status<T extends number | string>({
  status,
  statusDetail,
  showDot,
}: {
  status: T;
  statusDetail: { [key in T]: { text: string; className: string } };
  showDot?: boolean;
}) {
  const { t } = useTranslation();

  if (!status) return null;

  const { className, text } = statusDetail[status] || {};

  return (
    <div
      className={cx(
        'py-[4px] px-[12px] flex items-center gap-[10px] w-fit justify-center min-w-[110px] border-solid border-1 text-center font-600 rounded-[6px] text-[12px] color-white',
        [className],
      )}
    >
      {showDot && <div className={cx('w-[8px] h-[8px] bg-inherit bg-current! rounded-[50%]', [className])} />}
      {t(text)}
    </div>
  );
}

export default Status;
