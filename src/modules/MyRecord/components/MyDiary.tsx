import type { FC } from 'react';

import { Col, Row } from 'antd';
import dayjs from 'dayjs';

import Button from 'components/Button';

import { DEFAULT_SEARCH_DATE_FORMAT, TIME_FORMAT } from 'constant';

import type { IDiary } from '../constants/dto';

const data: IDiary = {
  date: '2023-07-06T07:24:25.028Z',
  title: '私の日記の記録が一部表示されます。',
  description:
    'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキステキストテキストテキストテキストテキストテキストテキス',
};
const MyDiaryItem: FC = () => {
  const { date, title, description } = data || {};
  return (
    <div className='component-record relative border-solid border-[1px] p-[10px]'>
      <h3>{dayjs(date).format(DEFAULT_SEARCH_DATE_FORMAT)}</h3>
      <h3>{dayjs(date).format(TIME_FORMAT)}</h3>
      <label>{title}</label>
      <p className='desc'>{description}</p>
    </div>
  );
};

const MyDiary: FC = () => {
  return (
    <div className='my-diary mb-[50px]'>
      <h2>MY DIARY</h2>
      <Row gutter={[15, 15]} className='mb-[30px]'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Col span={6} key={item}>
            <MyDiaryItem />
          </Col>
        ))}
      </Row>
      <div className='text-center'>
        <Button size='large' variant='primary' className='max-w-[300px]'>
          自分の日記をもっと見る
        </Button>
      </div>
    </div>
  );
};

export default MyDiary;
