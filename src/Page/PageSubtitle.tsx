import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

type PageSubtitleProps = TypographyProps;

const PageSubtitle = ({
  variant = 'subtitle1',
  color = 'textSecondary',
  sx,
  children,
  ...props
}: React.PropsWithChildren<PageSubtitleProps>) => {
  return (
    <Typography variant={variant} component="p" color={color} sx={{ textAlign: 'center', ...sx }} {...props}>
      {children}
    </Typography>
  );
};

export default PageSubtitle;
