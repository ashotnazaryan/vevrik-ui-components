import React from 'react';
import { Controller, FieldError, get, useFormContext as reactHookFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { InputFieldProps } from '../form.model';

const InputField: React.FC<InputFieldProps> = ({ name, ...props }) => {
  const {
    control,
    formState: { errors },
  } = reactHookFormContext();

  const error = get(errors, name) as FieldError;

  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        rules={props.rules}
        render={({ field }) => (
          <TextField
            {...field}
            {...props}
            value={field.value ?? ''}
            variant="filled"
            error={!!error}
            slotProps={{
              inputLabel: { shrink: !!field.value },
            }}
          />
        )}
      />
      {error && <FormHelperText error>{error.message}</FormHelperText>}
    </FormControl>
  );
};

export default InputField;
