import { useState,useContext,useRef } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import * as React from 'react';
import UserContext from '../Utils/UserContext';
import './Login.css';

function Login() {
  
  const {open,setOpen}=useContext(UserContext);
  const inputNumRef=useRef();
  const [flag,setFlag]=useState(false);
   
  function handleClick(){
   if(inputNumRef.current.value.length !==10 || inputNumRef.current.value.includes('-') || inputNumRef.current.value.includes('+') || inputNumRef.current.value.includes('e')){
   setFlag(true);
   inputNumRef.current.value=null;
   }
   else{
    setFlag(false);
   }
  }
  return (
   <>
       <Modal open ={open} 
        onClose={(e) => {setTimeout(()=>{setOpen(false)},250); document.querySelector(".modalLoginBox").style.animationName='modalBoxRev'}
        } >
        <Box className="modalLoginBox">
        <div className="modalBox_Top">
        <div>
        <div style={{cursor:"pointer"}} onClick={()=>{setTimeout(()=>{setOpen(false)},250); document.querySelector(".modalLoginBox").style.animationName='modalBoxRev'}}>X</div>
        <h2 style={{marginTop:"2%"}}> Login</h2>
        <p> or <span style={{color:"#fc8019",fontWeight:"600"}}>create an account</span></p>
        </div>
        <img class="jdo4W" width="100" height="105" imageid="" alt="img renderer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"/>
        </div>
        <div className="input__Boxss">
        <input ref={inputNumRef} type="number" placeholder="Enter 10 digit Phone Number" />
        {(flag ? <p style={{color:"red"}}>Invalid Input.Please retry!!</p> : null)}
        </div>
        <button onClick={handleClick}><strong>LOGIN</strong></button>
        <p className="login__Statement">By clicking on Login, I accept the <strong>Terms & Conditions & Privacy Policy</strong></p>
        </Box>
        </Modal>
  </>
  )
}

export default Login;