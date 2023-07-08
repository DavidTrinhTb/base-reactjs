import type { SortOrder } from 'antd/lib/table/interface';
import { BigNumber } from 'bignumber.js';
import endOfDay from 'date-fns/endOfDay';
import startOfDay from 'date-fns/startOfDay';
import isNil from 'lodash/isNil';

import { trimTrailingZero } from 'components/NumberFormat/utils';

import { ALL_OPTIONS, DEFAULT_SEARCH_PARAMS, HTTP_STATUS_CONSTANTS } from 'constant';

export const getSortDirection = (order: SortOrder | undefined): boolean => {
  switch (order) {
    case 'descend':
      return false;
    case 'ascend':
      return true;
    default:
      return true;
  }
};

export const convertBackSortDirection = (sortDirection: string) => {
  switch (sortDirection) {
    case 'asc':
      return 'descend';
    case 'desc':
      return 'ascend';
    default:
      return undefined;
  }
};

export const getRowNumber = (index: number, searchParams: Partial<typeof DEFAULT_SEARCH_PARAMS> | null | undefined) => {
  const { offset = DEFAULT_SEARCH_PARAMS.offset } = searchParams || {};

  return offset + index + 1;
};

export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const checkSuccessRequest = (response: any) => {
  return response?.status < HTTP_STATUS_CONSTANTS.ERROR;
};

export const checkServerErrorResponse = (response: any) => {
  return response?.status >= HTTP_STATUS_CONSTANTS.SERVER_ERROR_CODE;
};

export const formatNumber = (value: number | string, decimal?: number) => {
  return trimTrailingZero(new BigNumber(value).toFixed(decimal || 0));
};

export const formatInteger = (value: number | string) => {
  if (isNil(value)) return 0;
  return new BigNumber(value).toFormat();
};

export const multipleNumber = (first: string | number | undefined, second: string | number | undefined) => {
  if (isNil(first) || isNil(second)) return 0;
  return new BigNumber(first).multipliedBy(new BigNumber(second)).toString();
};

export const getIpfsLink = (ipfsUrl: string, cid: string) => {
  if (!ipfsUrl || !cid) return '';
  return `${ipfsUrl}/${cid}`;
};

// Custom type guard with predicate
export const isValidStringNumber = (value: number | string | undefined): value is number | string => {
  if (!value && value !== 0) {
    return false;
  }

  return true;
};

export const isLessThan = (first: number | string, second: number | string) => {
  if (!isValidStringNumber(first) || !isValidStringNumber(second)) {
    return true;
  }
  return new BigNumber(first).isLessThan(new BigNumber(second));
};

export const isLessThanOrEqualTo = (first?: number | string, second?: number | string) => {
  if (!isValidStringNumber(first) || !isValidStringNumber(second)) {
    return true;
  }
  return new BigNumber(first).isLessThanOrEqualTo(new BigNumber(second));
};

export const isEqualTo = (first: string | number, second: string | number) => {
  return new BigNumber(first).isEqualTo(new BigNumber(second));
};

export const clearRequestParams = (params?: any) => {
  const newParams = {} as any;
  const cloneParams = { ...params };

  for (const field in cloneParams) {
    if (cloneParams?.[field]?.length === 0) {
      delete cloneParams?.[field];
    }

    if (cloneParams?.[field] || cloneParams?.[field] === 0 || cloneParams?.[field] === false) {
      newParams[field] = cloneParams?.[field];
    }
  }

  return newParams;
};

export const limitMaxLengthNumber =
  (maxLength = 12) =>
  (inputObj: any) => {
    const { value } = inputObj;
    const integerPath = (value || '').split('.')[0];
    return integerPath.length <= maxLength;
  };

export const clearDotValue = (value: string) => {
  const splitValue = value.split('.');
  return splitValue?.[1] ? value : splitValue?.[0];
};

export const stripEmptyValue = <T extends {} = {}>(obj: T): T => {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    if (v !== null && v !== undefined && v !== '' && v !== null) {
      return { ...acc, [k]: v };
    }

    return acc;
  }, {} as T);
};

export const keepValues = <T extends {} = {}>(obj: T, keys: string[]): T => {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    if (keys.includes(k)) {
      return { ...acc, [k]: v };
    }

    return acc;
  }, {} as T);
};

export const convertNumericStringToFloat = <T extends {} = {}>(obj: T, keys: string[]): T => {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    if (keys.includes(k)) {
      return { ...acc, [k]: parseFloat(v as string) };
    }

    return { ...acc, [k]: v };
  }, {} as T);
};

const isNumeric = (str: any) => /^-?\d+$/.test(str);

export const stripValues = (obj: any, obj2: any) => {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    if (!(k in obj2)) {
      return { ...acc, [k]: v };
    }

    return acc;
  }, {});
};

export const stripAllOption = (obj: any, keys: string[]) => {
  const cloneObj = { ...obj };
  for (const key of keys) {
    if (key in cloneObj && cloneObj[key] === ALL_OPTIONS) {
      delete cloneObj[key];
    }
  }

  return cloneObj;
};

export const getSearchDateRange = (searchQuery: any, dateFromKey: string, dateToKey: string) => {
  const { [dateFromKey]: dateFrom, [dateToKey]: dateTo } = searchQuery;

  searchQuery[dateFromKey] = dateFrom && startOfDay(dateFrom);
  searchQuery[dateToKey] = dateTo && endOfDay(dateTo);

  return searchQuery;
};

export const isExternalLink = (link: string) => {
  const regex = /^https?:\/\//;

  return regex.test(link);
};

export const getColumnsSetting = <T>(columnsData: T[]) => {
  const filteredColumn = columnsData.filter((value: T) => !!value);

  const firstColumn = filteredColumn.slice(0, Math.ceil(filteredColumn.length / 2));
  const secondColumn = filteredColumn.slice(Math.ceil(filteredColumn.length / 2), filteredColumn.length);

  return { firstColumn, secondColumn };
};

export const convertToDisplayAddress = (address: string | null | undefined, lengthBeforeSlice = 6) => {
  if (!address) {
    return { address: '', isAddress: false };
  }

  if (address.length <= lengthBeforeSlice + 4) {
    return { address, isAddress: false };
  }

  return {
    address: address.slice(0, lengthBeforeSlice) + '...' + address.slice(address.length - 4, address.length),
    isAddress: true,
  };
};

export const storage = {
  get: (key: string) => {
    if (typeof Storage !== 'undefined') {
      return localStorage.getItem(key);
    }
  },
  getObject: (key: string) => {
    const data: any = storage.get(key);
    try {
      return JSON.parse(data);
    } catch (error) {
      return null;
    }
  },
  set: (key: string, obj: any) => {
    if (typeof Storage !== 'undefined') {
      localStorage.setItem(key, typeof obj === 'string' ? obj : JSON.stringify(obj));
    }
  },
  remove: (key: string) => {
    if (typeof Storage !== 'undefined') {
      localStorage.removeItem(key);
    }
  },
};
