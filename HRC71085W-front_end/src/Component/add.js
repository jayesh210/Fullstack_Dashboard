import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField  from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Box from '@mui/material/Box';
import { AddUser } from '../services/data';
import DialogTitle from '@mui/material/DialogTitle';


export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [user,setuser]=useState({business_code:"",cust_number:"",clear_date:"",buisness_year:"",doc_id:"", 
  posting_date:"", document_create_date:"", due_in_date:"" , invoice_currency:"", document_type:"",
  posting_id:"", total_open_amount:"", baseline_create_date:"",cust_payment_terms:"",invoice_id:""});

  let name,value;
  const changeHandler=  (e)=>{
    name=e.target.name;
    value=e.target.value;
    setuser({...user,[name]:value});
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handlesubmit=async(e) =>{
    e.preventDefault();
    setOpen(false);
    console.log(user);
    let response=await AddUser(user);
    
    if(response===1){
      setuser({business_code:"",cust_number:"",clear_date:"",buisness_year:"",doc_id:"", 
      posting_date:"", document_create_date:"", due_in_date:"" , invoice_currency:"", document_type:"",
      posting_id:"", total_open_amount:"", baseline_create_date:"",cust_payment_terms:"",invoice_id:""});
    }


  }
  const handleClose = async (e) => {
    e.preventDefault();
    setOpen(false);
    
   
  };

  return (
     <div  > 
      <Button sx={{color:'white'}} variant="outlined" className='btn' startIcon={<AddOutlinedIcon />} onClick={handleClickOpen}> 
        Add
      </Button>

      <div className="dialog">
      <Dialog fullWidth
      maxWidth = 'lg'   open={open} onClose={handleClose}>
      <DialogTitle className='dialogTitle'>Add</DialogTitle>
      <Box 
      >
      <div  className="parent">
        <div className="child">  
          <TextField  type="text" onChange={changeHandler} autoFocus id="" label="Business Code" 
            name="business_code" value={user.business_code} 
             variant="outlined" />

         </div>        
         
        <div className="child">
          <TextField  type="text" onChange={changeHandler} autoFocus id="" label="Customer Number" 
            name="cust_number" value={user.cust_number}
             variant="outlined" />
        </div>
         <div className="child"> 
          <TextField  type="date" onChange={changeHandler} autoFocus id="" label="Clear Date" 
            name="clear_date" value={user.clear_date} 
             variant="outlined" 
             focused />
        </div>
        <div className="child">  
          <TextField  type="text" onChange={changeHandler} autoFocus id="" label="Business Year" 
            name="buisness_year" value={user.buisness_year} 
             variant="outlined" />
        </div>
        <div className="child">  
          <TextField  type="text" onChange={changeHandler} autoFocus id="" label="Document id" 
            name="doc_id" value={user.doc_id} 
             variant="outlined" />
             </div>
        <div className="child"> 
          <TextField  type="date" onChange={changeHandler} autoFocus id="" label="Posting Date" 
            name="posting_date" value={user.posting_date} 
             variant="outlined" focused />
             </div>
        <div className="child">  
          <TextField  type="date" onChange={changeHandler} autoFocus id="" label="Document Create Date" 
            name="document_create_date" value={user.document_create_date} 
             variant="outlined" focused/>
             </div>
        <div className="child"> 
          <TextField  type="date" onChange={changeHandler} autoFocus id="" label="Due Date" 
            name="due_in_date" value={user.due_in_date}
             variant="outlined" focused/>
             </div>
        <div className="child">  
          <TextField  type="text" onChange={changeHandler} autoFocus id="" label="Invoice Currency" 
            name="invoice_currency" value={user.invoice_currency} 
             variant="outlined" />
             </div>
        <div className="child"> 
          <TextField type="text" onChange={changeHandler} autoFocus id="" label="Document Type" 
            name="document_type" value={user.document_type} 
             variant="outlined" />
             </div>
        <div className="child"> 
          <TextField  type="text" onChange={changeHandler} autoFocus id="" label="Posting id" 
            name="posting_id" value={user.posting_id} 
             variant="outlined" />
             </div>
        <div className="child"> 
          <TextField  type="text" onChange={changeHandler} autoFocus id="" label="Total open amound" 
            name="total_open_amount" value={user.total_open_amount} 
             variant="outlined" />
             </div>
        <div className="child">  
          <TextField  type="date" onChange={changeHandler} autoFocus id="" label="Baseline Create Date" 
            name="baseline_create_date" value={user.baseline_create_date} 
             variant="outlined" focused />
             </div>
        <div className="child"> 
          <TextField  type="text" onChange={changeHandler} autoFocus id="" label="Customer Payments Terms" 
            name="cust_payment_terms" value={user.cust_payment_terms} 
             variant="outlined" />
             </div>
        <div className="child">  
          <TextField type="text" onChange={changeHandler} autoFocus id="" label="Invoice id" 
            name="invoice_id" value={user.invoice_id} 
             variant="outlined" />
            
          </div>       
          </div>
          </Box>
        

        <DialogActions>
        <Box>
          <div className="container">
            <div className="item">
          <Button variant='outlined'  sx={{width:'500px'}} onClick={handlesubmit}>Add</Button>
          </div>
          <div className="item">
          <Button variant='outlined' sx={{width:'500px'}} onClick={handleClose} >Cancel</Button>
          </div>
          </div>
        </Box>
          
          
        </DialogActions>
      </Dialog>
      </div>
     
    </div>
  );
}
