import type { FC } from 'react';

import Article from './Article';
import Recommend from './Recommend';

const ChallengeContainer: FC = () => {
  return (
    <div className='challenge container'>
      <Recommend />
      <Article />
    </div>
  );
};

export default ChallengeContainer;
