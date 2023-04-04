import { useState } from 'react';
import { INavBar, NAVBAR_CONFIG, NavKey } from './constants';
import NavRoutes from './NavRoutes';

import './style.scss';

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleClickNavItem = (nav: INavBar) => {
    const { key } = nav;
    if (key === NavKey.menu) {
      setOpenMenu(true);
    }
  };

  const renderNavbar = NAVBAR_CONFIG.map((elm: INavBar) => {
    const { label, key, icon } = elm;
    return (
      <div className='navbar--child' key={key} onClick={() => handleClickNavItem(elm)}>
        <img src={icon} alt={key} />
        <div>{label}</div>
      </div>
    );
  });

  return (
    <div className='navbar'>
      <div className='navbar--list'>{renderNavbar}</div>
      {openMenu && <NavRoutes handleClose={() => setOpenMenu(false)} />}
    </div>
  );
};

export default NavBar;
