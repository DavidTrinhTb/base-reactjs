import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import { Button, Dropdown, Layout } from 'antd';
import cx from 'classnames';
import { NAVIGATION, ROUTE_URL } from 'routes';

import LanguageSelect from 'components/LanguageSelect';
import ModalComponent from 'components/Modal';
import ChangePasswordForm from 'modules/Authentication/components/ChangePassword';
import { useGetAuthenticationActions, useGetUser } from 'store/authentication/selector';

import DisconnectIcon from 'resources/svg/DisconnectIcon';
import IconAvatar from 'resources/svg/IconAvatar';
import IconKey from 'resources/svg/IconKey';

const { Header: HeaderAntd } = Layout;

const Header = () => {
  const { t } = useTranslation();
  const [isChangePassword, setIsChangePassword] = useState<boolean>(false);
  const location = useLocation();

  const user = useGetUser();
  const { setAuthenticationToken, setUser } = useGetAuthenticationActions();

  const handleDisconnect = async () => {
    try {
      setUser(null);
      setAuthenticationToken('');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <HeaderAntd className='header-container'>
      <div className='flex gap-[40px]'>
        <Link to={ROUTE_URL.BOT_MANAGEMENT}>
          <img src='/images/logo.png' className='w-[150px] h-auto object-contain' />
        </Link>

        <div className='flex gap-[20px]'>
          {NAVIGATION.map(({ text, link }) => (
            <Link
              to={link}
              key={link}
              className={cx(
                'text-[16px] font-500 color-#B0BEC5 active:color-primary hover:color-primary focus:color-primary active:font-800 hover:font-800 focus:font-800',
                {
                  'color-primary font-800': location.pathname.includes(link),
                },
              )}
            >
              {t(text)}
            </Link>
          ))}
        </div>
      </div>

      <div className='app-header__dropdown'>
        <LanguageSelect />
        <Dropdown
          menu={{
            items: [
              {
                key: 1,
                label: (
                  <div className='flex items-center'>
                    <IconAvatar className='avatar-icon' />
                    <span className='user'>{user?.email}</span>
                  </div>
                ),
              },
              {
                key: 2,
                label: (
                  <div className='flex items-center my-8' onClick={() => setIsChangePassword(true)}>
                    <div className='cursor-pointer flex items-center'>
                      <IconKey className='mr-[8px]' />
                      {t('header.change_password')}
                    </div>
                  </div>
                ),
              },
              {
                key: 3,
                label: (
                  <div className='disconnect-button'>
                    <Button icon={<DisconnectIcon />} onClick={handleDisconnect}>
                      {t('header.log_out')}
                    </Button>
                  </div>
                ),
              },
            ],
          }}
          overlayClassName='header-overlay'
          placement='bottomRight'
          trigger={['click']}
          getPopupContainer={(trigger: any) => trigger.parentElement}
        >
          <div className='cursor-pointer flex items-center'>
            <IconAvatar className='avatar-icon' />
            <span className='user'>{user?.email}</span>
          </div>
        </Dropdown>
      </div>
      <ModalComponent
        title={t('header.change_password')}
        width={488}
        open={isChangePassword}
        onClose={() => setIsChangePassword(false)}
      >
        <ChangePasswordForm email={user?.email} onChangeSuccess={() => setIsChangePassword(false)} />
      </ModalComponent>
    </HeaderAntd>
  );
};
export default Header;
