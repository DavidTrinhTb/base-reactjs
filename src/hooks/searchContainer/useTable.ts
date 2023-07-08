import type { Dispatch, SetStateAction } from 'react';

import type { TablePaginationConfig } from 'antd';
import type { FilterValue, SorterResult } from 'antd/lib/table/interface';
import type { SORT_PARAMS } from 'constant';
import isEmpty from 'lodash/isEmpty';

import { DEFAULT_SEARCH_PARAMS } from 'constant/index';
import { getSortDirection } from 'utils';

export const stripEmptyValue = (obj: any) => {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    if (v !== null && v !== undefined && v !== '' && !(Array.isArray(v) && isEmpty(v))) {
      return { ...acc, [k]: v };
    }

    return acc;
  }, {});
};

export const stripValues = (obj: any, obj2: any) => {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    if (!(k in obj2)) {
      return { ...acc, [k]: v };
    }

    return acc;
  }, {});
};

const useTable = <T, P extends SORT_PARAMS & Partial<typeof DEFAULT_SEARCH_PARAMS>>({
  searchParams,
  setSearchParams,
  setSort,
  defaultSearchParams,
}: {
  searchParams?: P;
  setSearchParams?: Dispatch<SetStateAction<P>>;
  setSort?: Dispatch<SetStateAction<SorterResult<T>>>;
  defaultSearchParams: P;
}) => {
  const handleChangePageParams = (page: string | number, pageSize: number) => {
    if (setSearchParams) {
      setSearchParams((prevState) => {
        return {
          ...prevState,
          limit: pageSize,
          offset: (Number(page) - 1) * pageSize,
        };
      });
    }
  };

  const handleChangeSortParams = (
    _pagination: TablePaginationConfig,
    _filters: Record<string, FilterValue | null>,
    sorter: SorterResult<T> | SorterResult<T>[],
  ) => {
    if (Array.isArray(sorter)) return;

    const { order, field, column } = sorter || {};

    setSort && setSort(sorter);

    if (typeof setSort === 'function') {
      setSort(sorter);
    }

    if (setSearchParams) {
      setSearchParams((prevState) => {
        let nextState = { ...prevState };

        if (order) {
          nextState = {
            ...defaultSearchParams,
            ...nextState,
            sort: (column as typeof column & { sortField?: string })?.sortField || field,
            asc: getSortDirection(order),
          };
        } else {
          delete nextState.sort;
          delete nextState.asc;
        }

        return nextState;
      });
    }
  };

  const isSearching =
    !!searchParams && !isEmpty(stripEmptyValue(stripValues(searchParams, { ...DEFAULT_SEARCH_PARAMS, sort: null })));

  return {
    handleChangePageParams,
    handleChangeSortParams,
    isSearching,
  };
};

export default useTable;
