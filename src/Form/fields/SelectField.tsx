import React from 'react';
import { FieldError, get, useFormContext as reactHookFormContext, useWatch } from 'react-hook-form';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { SelectFieldProps } from '../form.model';

const SelectField: React.FC<SelectFieldProps> = ({ label, name, options, ...props }) => {
  const {
    register,
    formState: { errors },
    control,
  } = reactHookFormContext();
  const value = useWatch({ control, name });
  const error = get(errors, name) as FieldError;
  const isValueAvailable = options.some((option) => option.value === String(value));
  const fieldValue = !!options?.length && isValueAvailable ? value : '';

  const menuProps = {
    MenuProps: {
      PaperProps: {
        style: {
          maxHeight: 240,
        },
      },
    },
  };

  return (
    <FormControl variant="filled" error={!!error} fullWidth>
      <InputLabel shrink={!!value}>{label}</InputLabel>
      <Select<string> value={fieldValue} {...register(name, { ...props.rules })} {...menuProps} {...props}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText error>{error.message}</FormHelperText>}
    </FormControl>
  );
};

export default SelectField;
