import React from 'react';
import { FieldError, get, useFormContext as reactHookFormContext, useWatch } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import { CheckboxFieldProps } from '../form.model';

const CheckboxField: React.FC<CheckboxFieldProps> = ({ name, label, ...props }) => {
  const {
    register,
    formState: { errors },
    control,
  } = reactHookFormContext();
  const error = get(errors, name) as FieldError;
  const checked = useWatch({ control, name });

  return (
    <FormControl>
      <FormControlLabel control={<Checkbox checked={!!checked} {...register(name, { ...props.rules })} {...props} />} label={label} />
      {error && <FormHelperText error>{error.message}</FormHelperText>}
    </FormControl>
  );
};

export default CheckboxField;
