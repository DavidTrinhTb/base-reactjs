import type { FC } from 'react';

import Banner from './Banner';
import Chart from './Chart';
import MyExercise from './Exercise';
import MyDiary from './MyDiary';

const MyRecordContainer: FC = () => {
  return (
    <div className='container'>
      <Banner />
      <Chart />
      <MyExercise />
      <MyDiary />
    </div>
  );
};

export default MyRecordContainer;
