import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import GenericPdf from './ReactPdf';
import { DialogTitle, IconButton, styled } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
       <i class="fa fa-times" aria-hidden="true"></i>
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }

const PopUpModel = ({open,handleClose}) => {

  return (
    <BootstrapDialog   PaperProps={{
        sx: {
          width: "900px",
          maxHeight: 800,
          maxWidth:1000
        }
      }} open={open} onClose={handleClose}>
           <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
         Select Resume Style
        </BootstrapDialogTitle>
    <DialogContent>
      <GenericPdf />
    </DialogContent>
  </BootstrapDialog>
  )
}

export default PopUpModel