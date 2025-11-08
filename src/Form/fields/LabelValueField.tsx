import React from 'react';
import { useFormContext as reactHookFormContext, useWatch } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import { LabelValueFieldProps } from '../form.model';

const LabelValueField: React.FC<LabelValueFieldProps> = ({ name, ...props }) => {
  const { register, control } = reactHookFormContext();
  const value = useWatch({ control, name });

  return (
    <>
      <Typography variant="body2" color="textSecondary">
        {props.label}
      </Typography>
      <Typography variant="body1" {...register(name, { ...props.rules })}>
        {value}
      </Typography>
    </>
  );
};

export default LabelValueField;
