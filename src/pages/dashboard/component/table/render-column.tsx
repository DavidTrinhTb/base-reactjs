import { Tooltip } from 'antd';
import { formatTime } from 'src/helpers/formatNumber';

export const renderColumn = () => {
  return [
    {
      title: 'ID',
      dataIndex: 'adminId',
      key: 'adminId',
      width: '10%',
      render: (no: any) => <span>{no}</span>,
    },
    {
      title: 'Created on',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: '15%',
      render: (createdAt: any) => <span>{formatTime(createdAt)}</span>,
    },
    {
      title: 'Name',
      dataIndex: 'fullname',
      key: 'fullname',
      width: '15%',
      render: (fullname: any) => {
        return (
          <span className='one-line'>
            <Tooltip title={fullname}>{fullname}</Tooltip>
          </span>
        );
      },
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      width: '15%',
      render: (role: any) => <span>{role}</span>,
    },
    {
      title: 'Wallet address',
      dataIndex: 'walletAddress',
      key: 'walletAddress',
      width: '20%',
      render: (walletAddress: any) => <span>{walletAddress}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: '10%',
      render: (status: any) => <span>{status}</span>,
    },
  ];
};
