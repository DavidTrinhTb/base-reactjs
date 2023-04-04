import React from 'react';
import './not-found.scss';

const NotFound: React.FC = () => {
  return (
    <div className="not-found-wrapper">
      <div className="big-font">404</div>
      <div className="not-found-group">
        <div className="not-found-text">Page not found</div>
        <div className="not-found-detail">
          {window?.location?.href ? window?.location?.href : ''}
          <span className="not-found-detail-highlight">was not found</span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
