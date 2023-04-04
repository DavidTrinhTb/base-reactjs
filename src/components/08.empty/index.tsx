import React from 'react';
import './styles.scss';

type Direction = 'row' | 'column';

interface Props {
  className?: string;
  direction?: Direction; // row or column
  text?: string;
  icon?: any;
}

const FracEmpty: React.FC<Props> = (props: Props) => {
  const { className = '', direction = 'row', text, icon } = props;

  return (
    <div className={`${className} empty-wrapper ${direction === 'row' ? 'flex-row' : 'flex-col'}`}>
      <img className='empty__image' src={icon} alt='empty-icon' />
      <div className='empty__text'>
        {text ?? (
          <>
            Unable to display information <br />
            due to insufficient data
          </>
        )}
      </div>
    </div>
  );
};

export default FracEmpty;
