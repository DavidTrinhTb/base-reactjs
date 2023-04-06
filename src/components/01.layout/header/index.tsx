import { Layout } from 'antd';
import React, { Dispatch, SetStateAction } from 'react';
import { ThemesMode } from '../PrivateLayout';
import { storage } from 'src/utils/storage';
import './styles.scss';
import { STORAGE_KEY } from 'src/constants/storage';
import { useAuth } from 'src/contexts/auth';

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
    <Header className='flex items-center justify-between'>
      <span>Header</span>
      <span className='cursor-pointer' onClick={handleLogout}>
        Log out
      </span>
    </Header>
  );
};

export default React.memo(AppHeader);
