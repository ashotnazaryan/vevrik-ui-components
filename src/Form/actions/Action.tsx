import React from 'react';
import Button from '@mui/material/Button';
import LoadingButton from '../../LoadingButton';
import { FormActionProps, FormActionType } from '../form.model';

const FormAction: React.FC<FormActionProps> = (props: FormActionProps) => {
  const { actionType, endIcon, ...buttonProps } = props;

  switch (props.actionType) {
    case FormActionType.button:
      return <Button {...buttonProps}>{props.label}</Button>;
    case FormActionType.loadingButton:
      return (
        <LoadingButton {...buttonProps} loading={props.loading}>
          {props.label}
        </LoadingButton>
      );
    default:
      throw new Error('Invalid Form Action Type');
  }
};

export default FormAction;
