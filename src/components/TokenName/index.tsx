import type { FC } from 'react';

import { TOKEN, YEN } from 'constant/token';

const TokenName: FC = () => (
  <span className='inline-block text-[8px] text-center font-800 leading-[30px] rounded-50% border-color-border-color border-solid border-[1px] w-[30px] h-[30px]'>
    {TOKEN}
  </span>
);

const Yen: FC = () => <span className='text-[18px] font-800 leading-[30px] '>{YEN}</span>;

export { TokenName, Yen };
