import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { usePageContext } from './PageContext';

type PageTitleProps = TypographyProps;

const PageTitle: React.FC<React.PropsWithChildren<PageTitleProps>> = ({ variant = 'h5', component = 'h5', sx, children, ...props }) => {
  const context = usePageContext();

  if (!context) {
    throw new Error('PageTitle must be used within a Page component using PageContext.');
  }

  return (
    <Typography
      variant={variant}
      component={component}
      sx={{
        textAlign: 'center',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default PageTitle;
