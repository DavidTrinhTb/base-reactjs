import type { FC } from 'react';

const Banner: FC = () => {
  return (
    <div className='component-banner mb-[50px]'>
      <div className='image flex items-center justify-center'>
        <div className='percent flex items-center justify-center color-#fff'>
          <span>05/21</span>
          <span className='ml-[5px] text-[18px]'>75%</span>
        </div>
      </div>
      <div className='chart flex-1 flex items-center justify-center'>
        <img src='/images/main_graph.png' />
      </div>
    </div>
  );
};

export default Banner;
