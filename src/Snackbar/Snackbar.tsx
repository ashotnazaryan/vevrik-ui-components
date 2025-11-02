import React from 'react';
import MuiAlert, { AlertColor } from '@mui/material/Alert';
import MuiSnackbar, { SnackbarProps as MuiSnackbarProps, SnackbarCloseReason } from '@mui/material/Snackbar';

type SnackbarProps = {
  type: AlertColor;
  message?: string;
  autoHideDuration?: number;
  onClose: () => void;
} & MuiSnackbarProps;

const Snackbar: React.FC<SnackbarProps> = ({ open = false, message = '', autoHideDuration = 10000, type, onClose, ...props }) => {
  const onSnackbarClose = (_: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }

    onClose();
  };

  return (
    <MuiSnackbar open={open} autoHideDuration={autoHideDuration} onClose={onSnackbarClose} {...props}>
      <MuiAlert severity={type} onClose={onSnackbarClose}>
        {message}
      </MuiAlert>
    </MuiSnackbar>
  );
};

export default Snackbar;
