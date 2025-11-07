import React from 'react';
import AccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDetailsContext } from './DetailsContext';

export type DetailsHeaderProps = {
  expandIconSxProps?: SxProps<Theme>;
} & AccordionSummaryProps;

const DetailsHeader: React.FC<React.PropsWithChildren<DetailsHeaderProps>> = ({ children, expandIconSxProps, ...props }) => {
  const context = useDetailsContext();

  if (!context) {
    throw new Error('DetailsHeader must be used within a Details component using DetailsContext.');
  }

  return (
    <AccordionSummary id="details-header" aria-controls="details-content" expandIcon={<ExpandMoreIcon sx={expandIconSxProps} />} {...props}>
      <Typography variant="h6">{children}</Typography>
    </AccordionSummary>
  );
};

export default DetailsHeader;
