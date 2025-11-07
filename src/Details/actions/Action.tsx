import React from 'react';
import Button from '@mui/material/Button';
import { DetailActionProps, DetailActionType } from '../details.model';

const DetailAction: React.FC<DetailActionProps> = (props: DetailActionProps) => {
  const { actionType, endIcon, ...buttonProps } = props;

  switch (props?.actionType) {
    case DetailActionType.button:
      return <Button {...buttonProps}>{props.label}</Button>;
    default:
      throw new Error('Invalid Detail Action Type');
  }
};

export default DetailAction;
