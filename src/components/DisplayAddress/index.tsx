import type { ElementType, FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Typography } from 'antd';

import IconChecked from 'resources/svg/IconChecked';
import IconCopy from 'resources/svg/IconCopy';
import { convertToDisplayAddress } from 'utils';

const { Text } = Typography;

type IDisplayAddress = {
  address?: string | null;
  copyable?: boolean;
  viewAccount?: boolean;
  copyText?: string;
  fakeIsAddress?: boolean;
  Tag?: ElementType;
};

const DisplayAddress: FC<IDisplayAddress> = ({
  address,
  copyable = true,
  viewAccount = false,
  copyText = 'common.copy',
  Tag = 'div',
}) => {
  const { t } = useTranslation();

  const { address: addressDisplay } = convertToDisplayAddress(address);

  return (
    <Tag>
      <Text
        copyable={
          copyable && address
            ? {
                text: address,
                icon: [<IconCopy key='copy' />, <IconChecked key='checked' />],
                tooltips: [t(copyText), t('common.copied')],
              }
            : false
        }
      >
        {addressDisplay || ''}
      </Text>
      {/* {viewAccount && address  && (
        <Tooltip
          title={
            <Space size={8}>
              <IconOpenInNew />
              {t('common.view_on')}
            </Space>
          }
        >
          <a className='open-in-new' href={utils.getBlockExplorerAccountLink(address)} target='_blank' rel='noreferrer'>
            {' '}
            <IconOpenInNew />
          </a>
        </Tooltip>
      )} */}
    </Tag>
  );
};

export default DisplayAddress;
