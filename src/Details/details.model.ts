import React from 'react';
import { GridBaseProps } from '@mui/material/Grid';
import { ButtonProps } from '@mui/material/Button';

export enum DetailType {
  section = 'section',
  labelValue = 'labelValue',
}

export enum DetailActionType {
  button = 'button',
}

export enum DetailActionName {
  edit = 'edit',
  navigate = 'navigate',
}

interface BaseDetailActionProps {
  label: string;
  name: string;
  actionType: DetailActionType;
}

interface BaseDetailFieldProps {
  label: string;
  name: string;
  grid?: GridBaseProps;
}

interface CustomRenderDetailFieldProps<T> extends BaseDetailFieldProps {
  type?: never;
  renderDetailField: (item?: T) => React.ReactNode;
}

interface StandardDetailFieldProps extends BaseDetailFieldProps {
  type: DetailType;
  renderDetailField?: never;
}

export type DetailFieldProps<T> = StandardDetailFieldProps | CustomRenderDetailFieldProps<T>;

type DetailActionButtonProps = BaseDetailActionProps & {
  actionType: DetailActionType.button;
} & ButtonProps;

export type DetailActionProps = DetailActionButtonProps;

export type DetailProps<T> = {
  title: string;
  fields: DetailFieldProps<T>[];
  actions?: DetailActionProps[];
};
