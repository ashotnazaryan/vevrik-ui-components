import React from 'react';
import { Controller, useFormContext as reactHookFormContext } from 'react-hook-form';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import FileUpload from '../../FileUpload';
import { FileUploadFieldProps } from '../form.model';

const FileUploadField: React.FC<FileUploadFieldProps> = ({ name, label, ...props }) => {
  const { control } = reactHookFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={props.rules}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <>
          {label && <FormLabel>{label}</FormLabel>}
          <FileUpload
            file={value}
            disabled={props.disabled}
            onFileSelect={(file: File) => {
              onChange(file);
              onBlur();
              props.onFileSelect?.(file);
            }}
            {...props}
          />
          {error && <FormHelperText error>{error.message}</FormHelperText>}
        </>
      )}
    />
  );
};

export default FileUploadField;
