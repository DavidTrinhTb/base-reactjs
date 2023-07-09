import type { FC } from 'react';

const BannerItem = ({ bannerUrl, title, description }: { bannerUrl: string; title: string; description: string }) => {
  return (
    <div className='banner-item'>
      <img src={bannerUrl} alt='' />
      <div className='content'>
        <h3 className='title text-[18px] font-weight-[600]'>{title}</h3>
        <p className='desc color-#fff text-[16px] w-[200px]'>{description}</p>
      </div>
    </div>
  );
};

const Banner: FC = () => {
  const data = [
    {
      bannerUrl: '/images/MyRecommend-1.jpg',
      title: 'BODY RECORD',
      description: '自分のカラダの記録',
    },
    {
      bannerUrl: '/images/MyRecommend-2.jpg',
      title: 'MY EXERCISE',
      description: '自分の運動の記録',
    },
    {
      bannerUrl: '/images/MyRecommend-3.jpg',
      title: 'MY DIARYD',
      description: '自分の日記',
    },
  ];
  return (
    <div className='flex items-center justify-between mb-[50px]'>
      {data.map((item, index) => (
        <BannerItem key={index} bannerUrl={item.bannerUrl} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default Banner;
