import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function Delete({deleteopen,handledeleteClose,deleteHandler}) {
 
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        DELETE
      </Button> */}

      <Dialog
        open={deleteopen}
        onClose={handledeleteClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Records ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete these record[s]?
          </DialogContentText>
        </DialogContent>
        
        <DialogActions>
          <Button variant='outlined' sx={{width:'200px'}}  onClick={handledeleteClose}>CANCEL</Button>
          <Button variant='outlined' sx={{width:'200px'}} onClick={deleteHandler} autoFocus>DELETE</Button>
        </DialogActions>
       

      </Dialog>
    </div>
  );
} 