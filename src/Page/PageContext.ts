import React from 'react';

const PageContext = React.createContext<boolean>(false);

export const usePageContext = () => {
  const insidePage = React.useContext(PageContext);

  if (!insidePage) {
    throw new Error('usePageContext must be used within a Page component');
  }

  return insidePage;
};

export default PageContext;
