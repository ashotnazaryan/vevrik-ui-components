import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Column, TableEntity } from './table.model';

type ResponsiveRowProps<T> = {
  item: T;
  columns: Column<T>[];
  isMobile: boolean;
};

const renderCellContent = <T extends TableEntity>(item: T, column: Column<T>): React.ReactNode => {
  return column.renderBodyCell ? column.renderBodyCell(item) : (item[column.field] ?? '-');
};

const ResponsiveRow = <T extends TableEntity>({ item, columns, isMobile }: ResponsiveRowProps<T>) => {
  if (isMobile) {
    return (
      <Card>
        <CardContent>
          {columns.map((column) => {
            const content = renderCellContent(item, column);

            return (
              <Box key={column.field} sx={{ display: 'flex', flexDirection: 'column', mb: 3 }}>
                <Typography variant="body2">{column.name}</Typography>
                <Box sx={{ flex: 1 }}>{React.isValidElement(content) ? content : <Typography variant="body1">{content}</Typography>}</Box>
              </Box>
            );
          })}
        </CardContent>
      </Card>
    );
  }

  return (
    <TableRow hover>
      {columns.map((column) => {
        const content = renderCellContent(item, column);

        return (
          <TableCell key={column.field} align={column.align || 'left'} sx={{ width: column.width || 'auto', ...column.sx }}>
            {React.isValidElement(content) ? (
              content
            ) : (
              <Typography variant="body1" component="span">
                {content}
              </Typography>
            )}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default ResponsiveRow;
