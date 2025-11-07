import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { DetailFieldProps } from '../details.model';

const SectionDetail = <T,>({ ...props }: DetailFieldProps<T>) => {
  return (
    <>
      <Typography variant="h6" color="textSecondary" sx={{ fontWeight: 500 }} {...props}>
        {props.label}
      </Typography>
      <Divider />
    </>
  );
};

export default SectionDetail;
