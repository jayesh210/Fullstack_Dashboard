/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useState, useEffect } from 'react';
import './style.css'
import {DataGrid} from '@mui/x-data-grid';
import {UpdateUser,getData,deleteUser,Search} from '../services/data'
import Add from "./add";
import Edit from './EditUser';
import Delete from './Delete';
import AdvanceSearch from './AdvanceSearch';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import  IconButton  from "@mui/material/IconButton";
import RefreshIcon from '@mui/icons-material/Refresh';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';



const columns=[
    
        {field:'sl_no',headerName:'Sl no'},
        {field:'business_code',headerName:'Business Code',width:130},
        {field:'cust_number',headerName:'Customer Number',width:130},
        {field:'clear_date',headerName:'Clear Date',width:130},
        {field:'buisness_year',headerName:'Buisness Year',width:130},
        {field:'doc_id',headerName:'Document Id',width:130},
        {field:'posting_date',headerName:'Posting Date',width:130},
        {field:'document_create_date',headerName:'Document Create Date',width:180},
        {field:'due_in_date',headerName:'Due Date',width:130},
        {field:'invoice_currency',headerName:'Invoice Currency',width:130},
        {field:'document_type',headerName:'Document Type',width:130},
        {field:'posting_id',headerName:'Posting Id',width:100},
        {field:'total_open_amount',headerName:'Total Open Amount',width:170},
        {field:'baseline_create_date',headerName:'Baseline Create Date',width:200},
        {field:'cust_payment_terms',headerName:'Customer Payment Terms',width:200},
        {field:'invoice_id',headerName:'Invoice Id',width:100},
        {field:'aging_bucket',headerName:'Aging Bucket',width:130},
    
]

const  DataTable=()=> {
    const  [tableData,setData]=useState([]);
    const [pageSize,setPageSize]=useState(10);
    const [Searchuser,setSearchuser]=useState({doc_id:"",invoice_id:"",cust_number:"",buisness_year:""})
   
        const [disabled,setdisable]=useState(true);
        const [dltdisabled,setdltdisable]=useState(true);
        var [checklist,setchecklist]=useState([]);
        const [open, setOpen] = useState(false);
        const [Searchopen, setSearchOpen] = useState(false);
        const [deleteopen, setdeleteOpen] = useState(false);
        const [user,setuser]=useState({sl_no:"",invoice_currency:"",cust_payment_terms:""});
        const{sl_no,invoice_currency,cust_payment_terms}=user;
        const{doc_id,invoice_id,cust_number,buisness_year}=Searchuser;
        
        useEffect(async ()=> {
          setData(await getData())
         
        },[]);

        const ReloadData=async(e)=>{
            e.preventDefault();
            setData(await getData())
           
        }
        let name,value;
        const changeHandler=(e)=>{
          name=e.target.name;
          value=e.target.value;
          setuser({...user,[name]:value});
        }
        const advancechangeHandler=(e)=>{
          name=e.target.name;
          value=e.target.value;
          setSearchuser({...user,[name]:value});
        }
        function handleClickOpen() {
              setOpen(true);
          }
        function handleSearchClickOpen() {
              setSearchOpen(true);
          }
          function handledeleteClickOpen() {
            setdeleteOpen(true);
        }
      
        const handleClose = () => {
          setOpen(false);
        };
        const handleSearchClose = () => {
          setSearchOpen(false);
        };
        const handledeleteClose = () => {
          setdeleteOpen(false);
        };
        const editHandler=async()=>{
          setOpen(false)
          let response=await UpdateUser(user);
          console.log(response);
        }
        const SearchHandler=async(e)=>{
          e.preventDefault();
          setSearchOpen(false)
       
          let response=setData(await Search(Searchuser));
          console.log(response);
         
          
        }
        
        const deleteHandler=async()=>{
          setdeleteOpen(false)
          for (let i = 0; i < checklist.length; i++) {
             let id= checklist[i];
             let response=await deleteUser(id);
             console.log(response);
          }
          setchecklist([]);
         
          
        }
        const checkHandler= async (e)=>{
          var sl_no=e.row.sl_no;
          console.log(e)
          if(checklist.includes(sl_no)){
            var myIndex = checklist.indexOf(sl_no);
          if (myIndex !== -1) {
            checklist.splice(myIndex, 1);
          }
          }
          else{ checklist.push(sl_no);}

          console.log(checklist.length)
          if(checklist.length===1){setdisable(false);}
          else {setdisable(true)};
          if(checklist.length>0){setdltdisable(false);}
          else {setdltdisable(true)}
            
          console.log(checklist)
          var edituser=tableData.filter(user=>user.sl_no===sl_no)[0];
          setuser(edituser);
        }
        

    
  return (
    <>
      <AdvanceSearch Searchopen={Searchopen} doc_id={doc_id} invoice_id={invoice_id}
        cust_number={cust_number} buisness_year={buisness_year}
        handleSearchClose={handleSearchClose}
        advancechangeHandler={advancechangeHandler}
        SearchHandler={SearchHandler}
        />
    <div style={{color:"#FFFFFF", backgroundColor:"#283D4A"}}>
    <div className="buttnSectn">
            <div className='leftSide'>
            <Button  variant='contained' name="Predict" >Predict</Button>
            <Button sx={{color:'white'}} variant='outlined' name="Analytical View">Analytical View</Button> 
            <Button sx={{color:'white'}}variant='outlined' onClick={handleSearchClickOpen} name="Advance Search">Advance Search</Button>
            <IconButton area-label="Refresh"  >
              <RefreshIcon sx={{color:'white'}} variant="outlined" onClick={(e)=>ReloadData(e)}/>
            </IconButton>
                
            </div>
            <div className='cnter'>
            <TextField sx={{ flexGrow: 1,background:'white',borderRadius:'2%' }} id="Search_customer_id" label="Search Customer Id" type="text"
            name="Search_customer_id"  
             variant="standard" />
            </div>
            <div className="rightSide">
            <Add  className='addbtn'/>
          <Button sx={{color:'white'}} variant='outlined' className='btn' startIcon={<ModeEditOutlineOutlinedIcon />} disabled={disabled} onClick={handleClickOpen}>Edit</Button>
          <Button  sx={{color:'white'}} variant='outlined' className='btn' startIcon={<DeleteOutlineOutlinedIcon />} disabled={dltdisabled} onClick={handledeleteClickOpen}>Delete</Button>
         
            </div>
          </div>
        
        <Edit open={open} sl_no={sl_no}  invoice_currency={invoice_currency}
        cust_payment_terms={cust_payment_terms}
        changeHandler={changeHandler}
        handleClose={handleClose}
        edithandler={editHandler}
        handleClickOpen={handleClickOpen}
         />
         
        <Delete deleteopen={deleteopen}  handledeleteClose={handledeleteClose} deleteHandler={deleteHandler}
        />
    <div style={{height:400,width:'100%'}}>

        <DataGrid style={{color:"#FFFFFF", height:'400px',backgroundColor:"#283D4A"}}
        
        checkboxSelection onCellClick={(e)=>checkHandler(e)}
        rows={tableData} 
        columns={columns} 
        getRowId={(rows) => rows.sl_no}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10,45, 20 , 50 , 100]}
        pagination
        {...tableData}
           
        />
    </div>
    </div>
    </>
  
  )
}

export default DataTable;