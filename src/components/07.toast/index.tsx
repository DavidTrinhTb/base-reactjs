import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './toast.scss';

export const customToast = (content: string | React.ReactNode, type: 'success' | 'error', linkTo?: string) => {
  const linkToElement = (
    <Link to={linkTo ?? ''} target='_blank'>
      <span className='link-to-text'>View on BscScan</span>
    </Link>
  );

  toast[type](
    <div className='toast-body-wrapper'>
      {content}
      {linkTo && linkToElement}
    </div>,
  );
};
