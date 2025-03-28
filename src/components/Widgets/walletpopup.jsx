import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box
} from '@mui/material';
import CopyButton from './copybutton'; // adjust path if needed

const WalletPopup = ({
  open,
  onClose,
  title,
  address,
  qrImage,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle sx={{ textAlign: 'center' }}>{title}</DialogTitle>
      <DialogContent>
        <Box
          onClick={onClose}
          sx={{
            textAlign: 'center',
            cursor: 'pointer',
          }}
        >
          <Box sx={{ wordBreak: 'break-all', mb: 2 }}>
            {address}
          </Box>
          <CopyButton textToCopy={address} />
          <img
            src={qrImage}
            alt={`${title} QR Code`}
            style={{
              width: '100%',
              maxWidth: '250px',
              height: 'auto',
              margin: '1rem auto 0',
              borderRadius: '8px',
              display: 'block',
            }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default WalletPopup;