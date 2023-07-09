import type { FC } from 'react';

import cx from 'classnames';

import type { IPhoto } from 'modules/HomePage/constants/dto';

const PhotoItem: FC<{ item: IPhoto }> = ({ item }) => {
  const { bannerUrl, title } = item || {};
  return (
    <div className='component-record relative'>
      <img className='max-w-[100%]' src={bannerUrl} alt='' />
      <span className={cx('absolute bottom-0 left-0 z-10 bg-#FFCC21 color-#fff px-[10px] py-[5px]')}>{title}</span>
    </div>
  );
};

export default PhotoItem;
