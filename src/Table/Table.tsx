import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import { TableProps as MuiTableProps } from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TablePagination, { TablePaginationProps } from '@mui/material/TablePagination';
import Paper, { PaperProps } from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useResponsive } from '../hooks';
import Page from '../Page';
import { Column, TableEntity } from './table.model';
import { StyledTable } from './StyledTable';
import LinearLoader from '../LinearLoader';
import ResponsiveRow from './ResponsiveRow';

export type TableProps<T> = {
  columns: Column<T>[];
  items?: T[];
  loading: boolean;
  pageNumber: number;
  pageSize: number;
  pageSizeOptions: number[];
  totalItems?: number;
  noRecordsTemplate?: React.ReactElement;
  muiTableProps?: MuiTableProps;
  muiPaginationProps?: TablePaginationProps;
  onPageNumberChange: (pageNumber: number) => void;
  onPageSizeChange: (pageSize: number) => void;
} & PaperProps;

const Table = <T extends TableEntity>({
  columns,
  items = [],
  loading,
  pageNumber,
  pageSize,
  pageSizeOptions,
  totalItems = 0,
  noRecordsTemplate,
  muiTableProps,
  muiPaginationProps,
  onPageNumberChange,
  onPageSizeChange,
  ...props
}: TableProps<T>) => {
  const { isMobile } = useResponsive();
  const noData = !loading && items.length === 0;

  const handlePageNumberChange = (_: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
    onPageNumberChange(page + 1);
  };

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onPageSizeChange(Number(event.target.value));
  };

  const renderEmptyState = () => (
    <>
      {noRecordsTemplate ?? (
        <Page sx={{ margin: 0 }}>
          <Page.Subtitle>No Records Found</Page.Subtitle>
        </Page>
      )}
    </>
  );

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between',
        pt: 3,
        pr: 3,
        pb: 1,
        pl: 3,
        position: 'relative',
        maxWidth: '100%',
      }}
      {...props}
    >
      {isMobile ? (
        <Box sx={{ flexGrow: 1 }}>
          {noData ? (
            renderEmptyState()
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, p: 2 }}>
              {items.map((item) => (
                <ResponsiveRow key={item.id} item={item} columns={columns} isMobile={isMobile} />
              ))}
            </Box>
          )}
        </Box>
      ) : (
        <TableContainer sx={{ flexGrow: 1 }}>
          <StyledTable stickyHeader aria-label="table" {...muiTableProps}>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.field} align={column.align || 'left'} sx={{ width: column.width || 'auto', ...column.sx }}>
                    {column.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {noData ? (
                <TableRow>
                  <TableCell colSpan={columns.length} align="center">
                    {renderEmptyState()}
                  </TableCell>
                </TableRow>
              ) : (
                items.map((item) => <ResponsiveRow key={item.id} item={item} columns={columns} isMobile={isMobile} />)
              )}
            </TableBody>
          </StyledTable>
        </TableContainer>
      )}

      <TablePagination
        component="div"
        rowsPerPageOptions={pageSizeOptions}
        count={totalItems}
        rowsPerPage={pageSize}
        page={pageNumber - 1}
        onPageChange={handlePageNumberChange}
        onRowsPerPageChange={handlePageSizeChange}
        {...muiPaginationProps}
      />

      <LinearLoader open={loading} />
    </Paper>
  );
};

export default Table;
