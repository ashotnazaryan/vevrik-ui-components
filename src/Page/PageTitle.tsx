import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

type PageTitleProps = TypographyProps;

const PageTitle: React.FC<React.PropsWithChildren<PageTitleProps>> = ({ variant = 'h5', component = 'h5', sx, children, ...props }) => {
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
