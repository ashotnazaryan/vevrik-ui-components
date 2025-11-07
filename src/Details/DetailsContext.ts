import React from 'react';

const DetailsContext = React.createContext<{ loading: boolean } | undefined>(undefined);

export const useDetailsContext = () => {
  const context = React.useContext(DetailsContext);

  if (!context) {
    throw new Error('useDetailsContext must be used within a Details component');
  }

  return context;
};

export default DetailsContext;
