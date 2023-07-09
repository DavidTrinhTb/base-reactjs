import type { FC } from 'react';

import { Col, Row } from 'antd';

const data = {
  time: 10,
  title: '家事全般（立位・軽い）',
  kcal: '26kcal',
};
const MyExerciseItem: FC = () => {
  const { title, kcal, time } = data || {};
  return (
    <li className='exercise-item flex justify-between color-white py-[10px] gap-[10px]'>
      <span>●</span>
      <div className='flex-1'>
        <label>{title}</label>
        <p className='desc color-primary-300'>{kcal}</p>
      </div>
      <span className='color-primary-300'>{time} min</span>
    </li>
  );
};
//
// 10 min
// 26kcal
const MyExercise: FC = () => {
  return (
    <div className='my-exercise mb-[50px] p-[15px]'>
      <div className='flex'>
        <h2 className='color-white'>MY EXERCISE</h2>
        <h2 className='ml-[10px] color-white'>2021.05.21</h2>
      </div>
      <div className='content'>
        <Row gutter={[30, 15]} className='mb-[30px]'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item) => (
            <Col span={12} key={item}>
              <MyExerciseItem />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default MyExercise;
