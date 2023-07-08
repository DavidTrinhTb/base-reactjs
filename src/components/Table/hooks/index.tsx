import { ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import type { ColumnType, SorterResult } from 'antd/lib/table/interface';
import type { ColumnType as RcColumnType } from 'rc-table/lib/interface';

import ColumnWithSkeleton from '../ColumnWithSkeleton';

export const useColumnsConfig = <T, U extends string>({
  sort,
  isLoading,
  columnsText,
  applyingColumns,
  hasColumnsFilter = false,
}: {
  sort: SorterResult<T> | undefined;
  isLoading: boolean;
  columnsText: Partial<Record<U, string>>;
  applyingColumns?: any[];
  hasColumnsFilter?: boolean;
}) => {
  const { t } = useTranslation();

  const getColumnConfig = useCallback(
    ({ render, title, dataIndex, key, sorter, ...column }: ColumnsConfig<T>) => ({
      ...column,
      ...(sorter && { sortOrder: sort?.field === dataIndex ? sort?.order : undefined }),
      sorter,
      ...(hasColumnsFilter && key && { key }),
      title: title || t(columnsText[dataIndex as U] || ''),
      dataIndex,
      render: (value: any, record: T, index: number) => (
        <ColumnWithSkeleton isLoading={isLoading}>{render?.(value, record, index) as ReactNode}</ColumnWithSkeleton>
      ),
    }),
    [isLoading],
  );

  return { getColumnConfig };
};

export type ColumnsConfig<T> = {
  render: ColumnType<T>['render'];
  title?: string;
  dataIndex?: string;
  key?: string;
  sorter?: boolean;
} & RcColumnType<T>;
