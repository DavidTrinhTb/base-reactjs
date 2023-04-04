import React from 'react';
import { Layout } from 'antd';
import './styles.scss';

const { Footer } = Layout;

const AppFooter: React.FC = () => {
  return <Footer className="footer">&copy;&nbsp;FRAC 2022</Footer>;
};

export default AppFooter;
