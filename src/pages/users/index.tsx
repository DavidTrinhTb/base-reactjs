import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DEFAULT_SEARCH_PARAMS } from 'src/constants/params';
import { fetchListUsers } from 'src/store/actions/admin';
import ListUser from './component/table';
import './styles.scss';

const initialParams = {
  ...DEFAULT_SEARCH_PARAMS,
};

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const [params, setParams] = useState<any>(initialParams);
  const listUser = useSelector((state: any) => state?.admin?.listUser) || {};

  useEffect(() => {
    dispatch(fetchListUsers(params));

    // eslint-disable-next-line
  }, [params]);

  return (
    <div className='user-page'>
      <ListUser loading={false} data={listUser} paramSearch={params} setParamSearch={setParams} />
    </div>
  );
};

export default Users;
