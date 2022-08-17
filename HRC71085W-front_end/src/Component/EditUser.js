import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function EditUser({open,invoice_currency,cust_payment_terms,changeHandler,edithandler,handleClose}) {
  

  return (
    <div className='Adddialoguebox'>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
       
          <TextField onChange={changeHandler}  id="invoice_currency" label="Invoice Currency" type="text"
            name="invoice_currency" value={invoice_currency} 
             variant="standard" 
          />
             <TextField onChange={changeHandler}  id="cust_payment_terms" label="Customer Payments Terms" type="text" 
            name="cust_payment_terms" value={cust_payment_terms} 
             variant="standard" />
         
        </DialogContent>
        <DialogActions>
        
          <Button variant='outlined' sx={{width:'205px'}} onClick={edithandler}>EDIT</Button>
         
          <Button variant='outlined' sx={{width:'205px'}} onClick={handleClose}>CANCEL</Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}
