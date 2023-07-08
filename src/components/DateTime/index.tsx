import type { FC } from 'react';

import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

import { DATE_FORMAT, TIME_FORMAT } from 'constant';

const DateTime: FC<{ value?: string | Date; breakLine?: boolean }> = ({ value, breakLine = true }) =>
  value ? (
    <>
      {format(typeof value === 'string' ? parseISO(value) : value, DATE_FORMAT)}
      {breakLine ? <br /> : ' '}
      {format(typeof value === 'string' ? parseISO(value) : value, TIME_FORMAT)}
    </>
  ) : null;

export default DateTime;
