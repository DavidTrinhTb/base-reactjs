import React from 'react';

import MetamaskIcon from 'src/assets/images/metamask-logo.png';
import LoadingIcon from 'src/assets/images/icon_loading_popup.png';
import FracModal from 'src/components/06.modals';
import './styles/wrong-network.scss';

export default function ModalProcessMetaMask({ visible }: { visible: boolean }) {
  return (
    <FracModal title='Connecting to MetaMask' visible={visible} className='modal--dark'>
      <div className='process-metamask-modal'>
        <div className='process-metamask-modal__img'>
          <img src={MetamaskIcon} width={100} alt='' />
        </div>
        <div className='process-metamask-modal__loading-icon'>
          <img src={LoadingIcon} alt='' />
        </div>
      </div>
    </FracModal>
  );
}
