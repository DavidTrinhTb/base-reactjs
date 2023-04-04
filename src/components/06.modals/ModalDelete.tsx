import React, { ReactNode } from 'react';
import ButtonComponent from 'src/components/02.buttons/ButtonComponent';
import FracModal from 'src/components/06.modals';
import './styles/unsaved-modal.scss';
import IconClose from 'src/assets/icons/common/icon-close.svg';

const ModalDelete: React.FC<{
  title: string;
  description: string | ReactNode;
  visible: boolean;
  width?: any;
  onClose: () => void;
  onDelete: () => void;
  loading?: boolean;
}> = ({ title, description, visible, width = 500, onClose, onDelete, loading }) => {
  return (
    <FracModal
      visible={visible}
      className='modal-unsaved-change'
      onCancel={onClose}
      title={title}
      width={width}
      iconClose={IconClose}
      maskClosable={false}
    >
      <div className='contain'>
        <div
          className='descridivtion text-center'
          dangerouslySetInnerHTML={{
            __html: `${description}`,
          }}
        ></div>
        <div className='button-group'>
          <ButtonComponent text='Cancel' variant='default' onClick={onClose} />
          <ButtonComponent text='Delete' variant='light' onClick={onDelete} loading={loading} />
        </div>
      </div>
    </FracModal>
  );
};

export default ModalDelete;
