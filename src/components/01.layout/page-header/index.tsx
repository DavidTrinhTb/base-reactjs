import { Button, Row } from 'antd';
import React from 'react';
import './styles.scss';
import IconBack from 'src/assets/icons/common/icon-back.svg';

const PageHeader: React.FC<{
  title?: string;
  showBack?: boolean;
  customHeaderClassName?: string;
  onBackClick?: () => void;
  contentMore?: any;
}> = ({ title, showBack = true, customHeaderClassName, onBackClick, contentMore }) => {
  return (
    <Row className={`page-header ${customHeaderClassName}`} align='middle'>
      {showBack && (
        <Button onClick={onBackClick} className='page-header__back'>
          <img src={IconBack} alt='btn-back' />
        </Button>
      )}
      {title}
      {contentMore && <div className='page-header__more'>{contentMore}</div>}
    </Row>
  );
};

export default PageHeader;
