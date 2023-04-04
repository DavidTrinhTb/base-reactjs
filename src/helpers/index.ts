import BigNumber from 'bignumber.js';
import moment from 'moment';
import { formatCash, formatCurrency } from './formatNumber';

export const ellipseAddress = (address = '', maxCharacters = 5, maxLastCharacters?: number | undefined): string => {
  if (!address) return '';

  return `${address.slice(0, maxCharacters)}...${address.slice(
    -(maxLastCharacters ? maxLastCharacters : maxCharacters),
  )}`;
};

export const sortDirection = (order: string) => {
  switch (order) {
    case 'descend':
      return -1;
    case 'ascend':
      return 1;
    default:
      return 1;
  }
};

export const toFixed = (value: string, number: number) => {
  return value?.toString().indexOf('.') === -1
    ? value
    : new BigNumber(value).toFixed(number, 4).replace(/(\.\d*?[1-9]|)\.?0+$/g, '$1');
};

export const takeDecimalNumber = (num: number, n: number) => {
  const base = 10 ** n;
  const result = Math.round(num * base) / base;
  return result;
};

export const renderPrice = (price: number) => {
  if (price < 1) return takeDecimalNumber(price, 4);
  if (price < 1000) return formatCurrency(price.toString(), 2);
  return formatCash(price);
};

export const autoScrollToErrorField = (errorFieldName: any) => {
  if (!!errorFieldName) {
    const element = document.querySelector(`.role-${errorFieldName}`);

    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'start',
    });
  }
};

export const checkIfValidHexColor = (value: string) => {
  return (
    /^#[0-9A-F]{6}$/i.test(value.trim()) ||
    /^#([0-9A-F]{3}){1,2}$/i.test(value.trim()) ||
    /^[0-9A-F]{6}$/i.test(value.trim()) ||
    /^([0-9A-F]{3}){1,2}$/i.test(value.trim())
  );
};

export const disableStartDate = (value?: any, disableFromNow?: boolean) => (current: any) => {
  const to = value;
  const currentDate = moment(Date.now()).startOf('day');
  if (to) return current.clone().startOf('day').isAfter(to.clone().startOf('day'));
  return disableFromNow ? current < currentDate : false;
};

export const disableEndDate = (value?: any, disableFromNow?: boolean) => (current: any) => {
  const from = value;
  const currentDate = moment(Date.now()).startOf('day');
  if (from) return current.clone().startOf('day').isBefore(from.clone().startOf('day'));
  return disableFromNow ? current < currentDate : false;
};

export const onKeyDown = (
  e: React.KeyboardEvent<HTMLDivElement>,
  interger?: number,
  decimal?: number,
  prefix = true,
) => {
  const target = e.target as any;
  const acceptInput = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const escapeInput = ['Backspace', 'ArrowLeft', 'ArrowRight', ...[prefix && '.']];
  const splitValue = target.value?.split('.');
  const indexof = target.value.indexOf('.');
  if ((target.value.includes('.') && e.key === '.') || (e.key === '.' && !target.value)) {
    e.preventDefault();
  }
  if (!escapeInput.includes(e.key)) {
    if (
      (splitValue[0].length === interger && target.selectionStart <= indexof) ||
      (splitValue[1]?.length === decimal && target.selectionStart > indexof) ||
      !acceptInput?.includes(e.key) ||
      (splitValue.length === 1 && splitValue[0].length === interger)
    ) {
      e.preventDefault();
    }
  }
};

export const trueTypeOf = (obj: any) => Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

export const convertParamToObject = (urlSearchParam: URLSearchParams) => {
  if (!urlSearchParam) {
    return null;
  }

  const entries = urlSearchParam.entries() as any;
  const result: any = {};

  for (const [key, value] of entries) {
    result[key] = value;
  }

  return result;
};
