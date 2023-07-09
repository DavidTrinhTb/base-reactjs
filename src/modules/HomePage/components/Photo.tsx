import type { FC } from 'react';

import { Col, Row } from 'antd';

import Button from 'components/Button';

import { PHOTO_MANAGEMENT } from '../constants';
import type { IPhoto } from '../constants/dto';

import PhotoItem from './PhotoItem';

const PhotoComponent: FC = () => {
  const data: IPhoto[] = [
    {
      [PHOTO_MANAGEMENT.BANNER_URL]: '/images/m01.jpg',
      [PHOTO_MANAGEMENT.TITLE]: '05.21.Morning',
    },
    {
      [PHOTO_MANAGEMENT.BANNER_URL]: '/images/m02.jpg',
      [PHOTO_MANAGEMENT.TITLE]: '05.21.Morning',
    },
    {
      [PHOTO_MANAGEMENT.BANNER_URL]: '/images/m01.jpg',
      [PHOTO_MANAGEMENT.TITLE]: '05.21.Morning',
    },
    {
      [PHOTO_MANAGEMENT.BANNER_URL]: '/images/m02.jpg',
      [PHOTO_MANAGEMENT.TITLE]: '05.21.Morning',
    },
    {
      [PHOTO_MANAGEMENT.BANNER_URL]: '/images/m02.jpg',
      [PHOTO_MANAGEMENT.TITLE]: '05.21.Morning',
    },
    {
      [PHOTO_MANAGEMENT.BANNER_URL]: '/images/m01.jpg',
      [PHOTO_MANAGEMENT.TITLE]: '05.21.Morning',
    },
    {
      [PHOTO_MANAGEMENT.BANNER_URL]: '/images/m02.jpg',
      [PHOTO_MANAGEMENT.TITLE]: '05.21.Morning',
    },
    {
      [PHOTO_MANAGEMENT.BANNER_URL]: '/images/m01.jpg',
      [PHOTO_MANAGEMENT.TITLE]: '05.21.Morning',
    },
  ];
  return (
    <div className='component-photo'>
      <Row gutter={[15, 15]} className='mb-[30px]'>
        {data.map((item, index) => (
          <Col span={6} key={index}>
            <PhotoItem item={item} />
          </Col>
        ))}
      </Row>
      <div className='text-center'>
        <Button size='large' variant='primary' className='max-w-[300px]'>
          記録をもっと見る
        </Button>
      </div>
    </div>
  );
};

export default PhotoComponent;
