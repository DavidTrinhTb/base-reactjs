import React from 'react';
import ButtonComponent from 'src/components/02.buttons/ButtonComponent';
import FracModal from 'src/components/06.modals';
import './styles/unsaved-modal.scss';
import IconClose from 'src/assets/icons/common/icon-close.svg';

const ModalUnsavedChange: React.FC<{
  title: string;
  visible: boolean;
  width?: any;
  onClose: () => void;
  onLeavePage: () => void;
  textLeave?: string;
}> = ({ title, visible, width = 500, onClose, onLeavePage, textLeave }) => {
  return (
    <FracModal
      visible={visible}
      className='modal-unsaved-change'
      onCancel={onClose}
      title='Unsaved changes'
      width={width}
      iconClose={IconClose}
      maskClosable={false}
    >
      <div className='contain'>
        <div className='description text-center'>{title}</div>
        <div className='button-group'>
          <ButtonComponent text='Cancel' variant='default' onClick={onClose} />
          <ButtonComponent text={textLeave || 'Leave'} variant='light' onClick={onLeavePage} />
        </div>
      </div>
    </FracModal>
  );
};

export default ModalUnsavedChange;
