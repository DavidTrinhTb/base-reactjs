import React from 'react';
import ReactLoading from 'react-loading';
import FracModal from 'src/components/06.modals';
import './styles/modal-processing.scss';

const ModalProcessing: React.FC<{ visible: boolean; onClose?: () => void }> = ({ visible, onClose }) => {
  return (
    <FracModal
      title='Processing Request'
      className='modal-processing'
      visible={visible}
      width={500}
      showCloseIcon={false}
      onClose={onClose}
      zIndex={9999}
    >
      <div className='process-waiting'>
        <ReactLoading type='spinningBubbles' className='loading' color='#878787' height={64} width={64} />
        <p>
          Your request is being processed. Please do not close the browser until the processing is over. Otherwise, the
          transaction might be failed.
        </p>
      </div>
    </FracModal>
  );
};

export default ModalProcessing;
