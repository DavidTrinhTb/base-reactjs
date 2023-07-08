import type { FC } from 'react';
import { Link } from 'react-router-dom';

import IconArrowLeft from 'resources/svg/IconArrowLeft';

const BackToRoute: FC<{ link: string; title: string }> = ({ link, title }) => (
  <Link
    to={link}
    className='inline-flex gap-[10px] items-center mb-[40px] color-black text-[20px] font-700 hover:color-black'
  >
    <div className='flex items-center py-[6px] px-[8px] bg-primary_2 rounded-[6px] color-primary'>
      <IconArrowLeft />
    </div>
    {title}
  </Link>
);

export default BackToRoute;
