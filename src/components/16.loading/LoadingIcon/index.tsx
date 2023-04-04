import Img from 'src/assets/images/icon_loading_page.svg';
import './style.scss';
const LoadingIcon = () => {
  return (
    <div className='loading-page'>
      <img src={Img} alt='' />
    </div>
  );
};

export default LoadingIcon;
