import React from 'react';

const FormContext = React.createContext<{ loading: boolean } | undefined>(undefined);

export const useFormContext = () => {
  const context = React.useContext(FormContext);

  if (!context) {
    throw new Error('useFormContext must be used within a Form component');
  }

  return context;
};

export default FormContext;
