import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Footer: FC = () => {
  const { t } = useTranslation();

  return <footer className='bg-white p-24 text-center font-500'>{t('footer.content')}</footer>;
};

export default Footer;
