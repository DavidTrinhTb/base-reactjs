import { isArray } from 'lodash';
import { useState } from 'react';
import { MENU_CONFIG } from './constants';
import './style.scss';

interface IProps {
  handleClose: Function;
}

const NavRoutes = ({ handleClose }: IProps) => {
  const [listSubNavesOpen, setListSubNavesOpen] = useState<string[]>([]);

  const handleClickItem = (elm: any) => {
    if (isArray(elm.subNaves)) {
      handleToggleMenu(elm.key);
    } else {
      // redirect to page
      handleClose();
    }
  };

  const handleToggleMenu = (key: string) => {
    if (listSubNavesOpen.includes(key)) {
      const newList = listSubNavesOpen.filter((id: string) => id !== key);
      setListSubNavesOpen(newList);
    } else {
      setListSubNavesOpen([...listSubNavesOpen, key]);
    }
  };

  const renderMenu = MENU_CONFIG.map((elm: any) => {
    const { label, key, icon, subNaves } = elm;

    const hasSubNaves = isArray(subNaves);

    const renderSubNaves =
      hasSubNaves &&
      subNaves.map((subMenu: any) => {
        return (
          <div className='nav-routes--sub-menu__item' onClick={() => handleClose()}>
            {subMenu.label}
          </div>
        );
      });

    const isSubMenuOpen = listSubNavesOpen.includes(key);

    return (
      <div className='nav-routes--item' key={key} onClick={() => handleClickItem(elm)}>
        <div className='nav-routes--label'>
          <img src={icon} alt={key} />
          <span>{label}</span>
        </div>
        <div className={`nav-routes--sub-menu ${isSubMenuOpen ? 'open' : 'close'}`}>{renderSubNaves}</div>
      </div>
    );
  });

  return <div className='nav-routes'>{renderMenu}</div>;
};

export default NavRoutes;
