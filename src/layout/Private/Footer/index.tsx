import { Link } from 'react-router-dom';

import { Layout } from 'antd';
import cx from 'classnames';
import { FOOTER_NAVIGATION } from 'routes';

const { Footer: FooterAntd } = Layout;

const Footer = () => {
  return (
    <FooterAntd className='footer-container'>
      <div className='flex gap-[50px]'>
        {FOOTER_NAVIGATION.map(({ text, link }) => (
          <Link
            to={link}
            key={link}
            className={cx('text-[16px] font-500 color-#FFF hover:color-primary focus:color-primary')}
          >
            {text}
          </Link>
        ))}
      </div>
    </FooterAntd>
  );
};
export default Footer;
