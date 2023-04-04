import moment from 'moment';
import { FULL_DATETIME_FORMAT } from 'src/constants/formatters';

export const addCommaToNumber = (value: any, decimal = 2) => {
  if (!value) return 0;
  value = parseFloat(value);
  return value.toLocaleString('en', {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimal,
  });
};

export function formatNumber(value: string) {
  return parseFloat(value) > 0 ? `${value}`.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',') : value;
}

export const formatTime = (date: any, type = FULL_DATETIME_FORMAT) => {
  return date ? moment(date).format(type) : '';
};

export const formatCurrency = (value: any, limitDecimal?: number) => {
  if (!value) {
    return '';
  }
  if (value && value?.indexOf('.') >= 0) {
    const decimal_pos = value.indexOf('.');

    let left_side = value.substring(0, decimal_pos);
    let right_side = value.substring(decimal_pos + 1);

    left_side = formatNumber(left_side);

    if (limitDecimal === 0) return left_side;

    right_side = right_side.substring(0, limitDecimal ? limitDecimal : 3);

    return `${left_side}.${right_side}`;
  } else {
    return formatNumber(value);
  }
};

export const formatCash = (num: number) => {
  //@ts-ignore
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    notation: 'compact',
    compactDisplay: 'short',
  }).format(num);
};
