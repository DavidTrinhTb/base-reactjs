import React from 'react';
import classnames from 'classnames';
import { Modal, ModalProps } from 'antd';
import Title from 'antd/lib/typography/Title';
import './styles/index.scss';

export interface IFracModalProps extends ModalProps {
  children?: any;
  title?: any;
  onClose?: any;
  showCloseIcon?: boolean;
  visible: boolean;
  width?: number | string;
  maskClosable?: boolean;
  staticBackdrop?: boolean;
  wrapClassName?: string;
  getContainer?: any;
  destroyOnClose?: boolean;
  className?: string;
  iconClose?: string;
  isModalPreviewImage?: boolean;
  zIndex?: number;
}

const FracModal: React.FC<IFracModalProps> = ({
  children,
  wrapClassName,
  className,
  title,
  onClose,
  showCloseIcon = true,
  staticBackdrop = false,
  width = 300,
  footer,
  destroyOnClose = true,
  maskClosable = true,
  iconClose,
  isModalPreviewImage = false,
  zIndex = 1000,
  ...props
}: IFracModalProps) => {
  return (
    <Modal
      closeIcon={showCloseIcon && <img className='close-icon--custom' src={iconClose} alt='' onClick={onClose} />}
      closable={showCloseIcon}
      width={width}
      footer={footer ? footer : null}
      className={classnames(className, { 'preview-image-modal': isModalPreviewImage })}
      wrapClassName={classnames(wrapClassName)}
      maskClosable={maskClosable}
      zIndex={zIndex}
      {...props}
    >
      <div className='modal-wrap'>
        <Title level={5} className='title'>
          {title}
        </Title>
        {children}
      </div>
    </Modal>
  );
};

export default FracModal;
