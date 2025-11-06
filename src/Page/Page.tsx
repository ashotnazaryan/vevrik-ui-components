import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PageTitle from './PageTitle';
import PageSubtitle from './PageSubtitle';

type PageBaseProps = BoxProps;

type PageWithBackButton = PageBaseProps & {
  withBackButton: true;
  backIcon?: React.ReactNode;
  onBackButtonClick: () => void;
};

type PageWithoutBackButton = PageBaseProps & {
  withBackButton?: false;
  backIcon?: never;
  onBackButtonClick?: never;
};

type PageProps = PageWithBackButton | PageWithoutBackButton;

const Page = ({ children, withBackButton = false, backIcon = <ArrowBackIcon />, onBackButtonClick, ...props }: PageProps) => {
  return (
    <Box
      {...props}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        ...props.sx,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        {withBackButton && (
          <IconButton aria-label="Navigate Back" size="large" onClick={onBackButtonClick}>
            {backIcon}
          </IconButton>
        )}
        <Box sx={{ flex: 1 }}>{children}</Box>
      </Box>
    </Box>
  );
};

Page.Title = PageTitle;
Page.Subtitle = PageSubtitle;

export default Page;
