import React from 'react';
import { FieldError, get, useFormContext as reactHookFormContext } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import FormHelperText from '@mui/material/FormHelperText';
import Divider from '@mui/material/Divider';
import { SectionFieldProps } from '../form.model';

const SectionField: React.FC<SectionFieldProps> = ({ name, label, ...props }) => {
  const {
    formState: { errors },
  } = reactHookFormContext();
  const error = get(errors, name) as FieldError;

  return (
    <>
      <Typography variant="h6" color="textSecondary" sx={{ fontWeight: 500 }} {...props}>
        {label}
      </Typography>
      <Divider />
      {error && <FormHelperText error>{error.message}</FormHelperText>}
    </>
  );
};

export default SectionField;
