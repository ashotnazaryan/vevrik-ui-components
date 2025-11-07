import React from 'react';
import Typography from '@mui/material/Typography';
import { getNestedValue } from '../../helpers';
import { DetailFieldProps } from '../details.model';

const LabelValueDetail = <T,>({ values, ...props }: { values: T } & DetailFieldProps<T>) => {
  const fieldValue = getNestedValue<T>(values, props.name);

  return (
    <>
      <Typography variant="body2" color="textSecondary">
        {props.label}
      </Typography>
      <Typography variant="body1">{fieldValue ? String(fieldValue) : '-'}</Typography>
    </>
  );
};

export default LabelValueDetail;
