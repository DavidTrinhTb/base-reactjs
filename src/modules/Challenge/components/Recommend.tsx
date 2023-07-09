import type { FC } from 'react';

const RecommendItem = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className='recomend-item p-[5px] flex-1 text-center py-[30px]'>
      <label className='title text-[24px] mb-[10px] block max-w-[200px] mx-auto'>{title}</label>
      <div className='line' />
      <div className='desc mt-[10px] color-white'>{desc}</div>
    </div>
  );
};

const Recommend: FC = () => {
  const data = [
    {
      title: 'RECOMMENDED COLUMN',
      desc: 'オススメ',
    },
    {
      title: 'RECOMMENDED DIET',
      desc: 'オススメ',
    },
    {
      title: 'RECOMMENDED BEAUTY',
      desc: 'オススメ',
    },
    {
      title: 'RECOMMENDED HEALTH',
      desc: 'オススメ',
    },
  ];
  return (
    <div className='recommend flex gap-[20px] mt-[20px] mb-[50px]'>
      {data.map((item, index) => (
        <RecommendItem key={index} title={item.title} desc={item.desc} />
      ))}
    </div>
  );
};

export default Recommend;
