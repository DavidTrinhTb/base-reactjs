import type { FC, ReactNode } from 'react';

import IconCup from 'resources/svg/IconCup';
import IconKnife from 'resources/svg/IconKnife';

const MealItem = ({ title, icon }: { title: string; icon: ReactNode }) => {
  return (
    <div className='hexagon-wapprer'>
      <div className='content text-center'>
        {icon}
        <span className='block color-white text-[16px]'>{title}</span>
      </div>
    </div>
  );
};

const MealsComponent: FC = () => {
  const data = [
    {
      title: 'Morning',
      icon: <IconKnife />,
    },
    {
      title: 'Lunch',
      icon: <IconKnife />,
    },
    {
      title: 'Dinner',
      icon: <IconKnife />,
    },
    {
      title: 'Snack',
      icon: <IconCup />,
    },
  ];
  return (
    <div className='component-photo flex items-center justify-center gap-[80px] mb-[80px]'>
      {data.map((item, index) => (
        <MealItem key={index} title={item.title} icon={item.icon} />
      ))}
    </div>
  );
};

export default MealsComponent;
