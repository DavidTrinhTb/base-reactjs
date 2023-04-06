import { Pagination, PaginationProps } from 'antd';
import { DEFAULT_SEARCH_PARAMS } from 'src/constants/params';
import './styles.scss';

interface IPagination extends PaginationProps {
  value?: any;
  current?: number;
  pageSize?: number;
  showSizeChanger?: boolean;
  onChange?: (page: number, pageSize: number) => void;
}

const PAGE_SIZE_OPTIONS = [10, 20, 50];

const PaginationComponent: React.FC<IPagination> = (props: IPagination) => {
  const { pageSize, current = 1, showSizeChanger = false, ...restProps } = props;
  return (
    <div className='frac-pagination'>
      <Pagination
        current={current}
        pageSize={pageSize || DEFAULT_SEARCH_PARAMS.limit}
        pageSizeOptions={PAGE_SIZE_OPTIONS}
        showSizeChanger={showSizeChanger}
        {...restProps}
      />
    </div>
  );
};

export default PaginationComponent;
