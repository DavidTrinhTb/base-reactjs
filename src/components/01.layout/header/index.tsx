import { Layout } from 'antd';
import React, { Dispatch, SetStateAction } from 'react';
import { ThemesMode } from '../PrivateLayout';
import { storage } from 'src/utils/storage';
import { STORAGE_KEY } from 'src/constants/storage';
import { useAuth } from 'src/contexts/auth';
import IconToogle from 'src/assets/icons/svg/toogle.svg';
import './styles.scss';

const { Header } = Layout;

interface Props {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  theme: ThemesMode;
  setTheme: Dispatch<SetStateAction<ThemesMode>>;
}

const AppHeader: React.FC<Props> = ({ collapsed, setCollapsed, theme, setTheme }) => {
  const { setToken } = useAuth();
  const handleLogout = () => {
    setToken('');
    storage.remove(STORAGE_KEY.ACCESS_TOKEN);
  };

  return (
    <Header className='flex items-center justify-between bg-white px-8'>
      <span className='text-white cursor-pointer' onClick={() => setCollapsed(!collapsed)}>
        <img width={18} className='text-white' src={IconToogle} alt='' />
      </span>
      <span className='cursor-pointer font-bold' onClick={handleLogout}>
        Log out
      </span>
    </Header>
  );
};

export default React.memo(AppHeader);
