import React from 'react';

import Banner from './Banner';
import MealsComponent from './Meals';
import PhotoComponent from './Photo';

const HomePageContainer: React.FC = () => {
  return (
    <React.Fragment>
      <Banner />
      <div className='container'>
        <MealsComponent />
        <PhotoComponent />
      </div>
    </React.Fragment>
  );
};

export default HomePageContainer;
