import { Layout, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import React, { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { PATHS } from 'src/constants/paths';
import { SidebarList } from './constants/SidebarList';
import './styles.scss';

const { Item } = Menu;
interface ISidebar {
  collapsed: boolean;
}

const Sidebar: React.FC<ISidebar> = ({ collapsed }) => {
  const history = useHistory();
  const { Sider } = Layout;
  const location = useLocation();
  const selectedKey = `/${location.pathname.split('/')[1]}`;

  return (
    <Sider collapsed={collapsed} theme={'light'} className='sider' width={256}>
      <div className='logo-section' onClick={() => history.push(PATHS.HOME)}>
        Logo
      </div>
      <Menu theme='light' selectedKeys={[selectedKey]} mode='inline' className='main-menu'>
        {SidebarList.map((item: any, index: number) => {
          // if (item.role && !item.role.includes(profile.role)) return null;
          return (
            <Fragment key={index}>
              {!!item.inMenu && (
                <Item
                  key={item.subLink}
                  onClick={() => history.push(item.subLink)}
                  icon={<img src={item.icon} style={{ marginRight: '20px' }} alt='' />}
                >
                  {!collapsed && item.label}
                </Item>
              )}
              {item?.children && (
                <SubMenu
                  key={`${item.subLink}_${index}`}
                  icon={<img src={item.icon} style={{ marginRight: '30px' }} alt='' />}
                  title={item.label}
                  className='sub-menu-container'
                >
                  {item.children.map((subItem: any, subIndex: number) => {
                    // if (subItem.role && !subItem.role.includes(profile.role)) return null;
                    return (
                      <Menu.Item
                        key={subItem.subLink}
                        onClick={(e: any) => history.push(subItem.subLink)}
                        className='sub-menu-container__item'
                      >
                        {subItem.label}
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              )}
            </Fragment>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
