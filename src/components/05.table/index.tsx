import React from 'react';
import { Table, TableProps } from 'antd';
import cx from 'classnames';
import './styles.scss';

interface typeProps extends TableProps<any> {
  hidePagination?: boolean;
  customClassName?: string;
}

const TableComponent: React.FC<typeProps> = (props: typeProps) => {
  const { columns, dataSource, pagination, customClassName, hidePagination } = props;

  const itemRender = (
    current: number,
    type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
    originalElement: React.ReactNode,
  ) => {
    if (type === 'prev') {
      // eslint-disable-next-line
      return <a>{`< `}</a>;
    }
    if (type === 'next') {
      // eslint-disable-next-line
      return <a>{` >`}</a>;
    }
    return originalElement;
  };

  return (
    <Table
      columns={columns}
      className={cx('table-component', customClassName)}
      rowKey={(record) => record._id}
      dataSource={dataSource}
      pagination={pagination && !hidePagination ? { ...pagination, itemRender, position: ['bottomCenter'] } : false}
      {...props}
    />
  );
};

export default TableComponent;
