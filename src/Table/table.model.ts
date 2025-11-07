import React from 'react';
import { TableCellProps } from '@mui/material/TableCell';

export type TableEntity = Record<string, any>;

export type Column<T = TableEntity> = {
  name: React.ReactNode;
  field: string;
  width?: number | string;
  renderBodyCell?: (item: T) => React.ReactNode;
} & TableCellProps;
