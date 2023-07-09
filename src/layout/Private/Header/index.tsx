import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import { Layout } from 'antd';
import cx from 'classnames';
import { HEADER_NAVIGATION, ROUTE_URL, SUBMENU_NAVIGATION } from 'routes';

import IconMemu from 'resources/svg/IconMenu';

const { Header: HeaderAntd } = Layout;

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);

  return (
    <HeaderAntd className='header-container'>
      <Link to={ROUTE_URL.HOME}>
        <img src='/images/logo.png' className='w-[150px] h-auto object-contain' />
      </Link>

      <div className='flex items-center gap-[20px] relative'>
        {HEADER_NAVIGATION.map(({ text, link, icon }) => (
          <Link
            to={link}
            key={link}
            className={cx(
              'text-[16px] ml-[20px] flex items-center font-500 color-#fff active:color-primary hover:color-primary focus:color-primary active:font-800 hover:font-800 focus:font-800',
              {
                'color-primary font-800': location.pathname.includes(link),
              },
            )}
          >
            {icon} {t(text)}
          </Link>
        ))}
        <IconMemu className='cursor-pointer ml-[20px]' onClick={() => setShowSubMenu(!showSubMenu)} />

        {showSubMenu && (
          <div className='sub-menu absolute right-0 top-[100%] z-2 w-[200px]'>
            {SUBMENU_NAVIGATION.map(({ text, link }) => (
              <Link
                to={link}
                key={link}
                className={cx(
                  'text-[16px] flex items-center font-500 color-#fff active:color-primary hover:color-primary menu-item',
                )}
              >
                {t(text)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </HeaderAntd>
  );
};
export default Header;
