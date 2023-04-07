import React, { useCallback, useMemo, useState } from 'react';
import TableComponent from 'src/components/05.table';
import { sortDirection } from 'src/helpers';
import { renderColumn } from './render-column';
import './styles.scss';

const ListUser: React.FC<{
  loading: boolean;
  data: any;
  paramSearch: any;
  setParamSearch: Function;
}> = ({ loading, data, paramSearch, setParamSearch }) => {
  const pageSizeOptions = [10, 20, 50];
  const [pageSizeCurrent, setPageSizeCurrent] = useState(paramSearch?.limit || pageSizeOptions[0]);

  const dataSource = useMemo(() => {
    return (data?.docs || [])?.map((item: any, index: number) => ({
      ...item,
      no: paramSearch?.offset + index + 1,
      action: item?.adminId,
    }));
  }, [data?.docs, paramSearch?.offset]);

  const onChangePagination = useCallback(
    (page: any, pageSize: any) => {
      setParamSearch((prevData: any) => ({
        ...prevData,
        limit: pageSize,
        offset: (page - 1) * pageSize,
      }));
    },
    [setParamSearch],
  );

  const onSortChange = useCallback(
    (pagination: any, filter: any, sorter: any) => {
      const { order, field } = sorter;
      setParamSearch((prevData: any) => ({
        ...prevData,
        sortField: order && (field === 'fractor' ? 'fullname' : field),
        sortType: order && sortDirection(order),
      }));
    },
    [setParamSearch],
  );

  return (
    <TableComponent
      loading={loading}
      columns={renderColumn()}
      dataSource={dataSource}
      pagination={{
        pageSizeOptions: pageSizeOptions,
        pageSize: pageSizeCurrent,
        showSizeChanger: true,
        total: data?.totalDocs,
        current: paramSearch?.offset / paramSearch?.limit + 1,
        onShowSizeChange(current, size) {
          setPageSizeCurrent(size);
        },
        onChange(page, pageSize) {
          onChangePagination(page, pageSize);
        },
      }}
      onChange={onSortChange}
    />
  );
};

export default ListUser;
