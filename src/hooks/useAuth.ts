import React from 'react';
// import { authContext } from 'src/contexts/authContext';

export const useAuth = () => {
  const context = React.useContext('' as any);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};
