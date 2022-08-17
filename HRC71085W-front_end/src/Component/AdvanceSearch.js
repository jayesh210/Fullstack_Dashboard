import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AdvanceSearch ({Searchopen,doc_id,invoice_id,cust_number,buisness_year,advancechangeHandler,SearchHandler,handleSearchClose}){
    return (
        <div className='Searchdialoguebox'>
          
          <Dialog open={Searchopen} onClose={handleSearchClose}>
            <DialogTitle>Advance Search</DialogTitle>
            <DialogContent>

            <TextField onChange={advancechangeHandler} autoFocus id="" label="Document id" 
            name="doc_id" value={doc_id} 
             variant="standard" />
             <TextField onChange={advancechangeHandler}  id="" label="Invoice id" 
            name="invoice_id" value={invoice_id} 
             variant="standard" />
             <TextField onChange={advancechangeHandler}  id="" label="Customer Number" 
            name="cust_number" value={cust_number}
             variant="standard" />
             <TextField onChange={advancechangeHandler}  id="" label="Business Year" 
            name="buisness_year" value={buisness_year} 
             variant="standard" />
             
             
            </DialogContent>
            <DialogActions>
            
              <Button variant='outlined' sx={{width:'300px'}} onClick={(e)=>SearchHandler(e)}>SEARCH</Button>
              <Button variant='outlined' sx={{width:'300px'}} onClick={handleSearchClose}>CANCEL</Button>
              
            </DialogActions>
          </Dialog>
        </div>
      );
}

