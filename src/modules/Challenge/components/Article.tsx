import type { FC } from 'react';

import { Col, Row } from 'antd';

const ArticleItem = () => {
  const tag = ['#魚料理', '#和食', '#DHA'];
  return (
    <div className='article-item p-[5px] flex-1 py-[30px]'>
      <img className='max-w-[100%] mb-[5px]' src='/images/column-1.jpg' alt='' />
      <label className='two-line text-[16px] mb-[5px]'>
        魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメっておきたい魚を食べるメリ
      </label>
      <div className='flex gap-[10px]'>
        {tag.map((item, index) => (
          <span key={index} className='tag'>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const Article: FC = () => {
  return (
    <div className='article mb-[50px]'>
      <Row gutter={[15, 15]}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Col span={6} key={item}>
            <ArticleItem />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Article;
