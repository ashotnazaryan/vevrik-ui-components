import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { usePageContext } from './PageContext';

type PageSubtitleProps = TypographyProps;

const PageSubtitle = ({
  variant = 'subtitle1',
  color = 'textSecondary',
  sx,
  children,
  ...props
}: React.PropsWithChildren<PageSubtitleProps>) => {
  const context = usePageContext();

  if (!context) {
    throw new Error('PageSubtitle must be used within a Page component using PageContext.');
  }

  return (
    <Typography variant={variant} component="p" color={color} sx={{ textAlign: 'center', ...sx }} {...props}>
      {children}
    </Typography>
  );
};

export default PageSubtitle;
