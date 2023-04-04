import { Layout } from 'antd';
import React, { Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router-dom';
import { PATHS } from 'src/constants/paths';
import { ThemesMode } from '../PrivateLayout';
import './styles.scss';

const { Header } = Layout;

interface Props {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  theme: ThemesMode;
  setTheme: Dispatch<SetStateAction<ThemesMode>>;
}

const AppHeader: React.FC<Props> = ({ collapsed, setCollapsed }) => {
  const history = useHistory();

  return (
    <Header className='site-layout-header theme-header'>
      <div className='logo-section' onClick={() => history.push(PATHS.HOME)}></div>
    </Header>
  );
};

export default React.memo(AppHeader);
