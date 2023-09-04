import { useState } from "react";
import { CiLocationOn } from 'react-icons/ci';
import {BiHomeAlt} from 'react-icons/bi';
import {MdOutlineWorkOutline} from 'react-icons/md';
import './Address.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import * as React from 'react';


function Address() {

    const [open, setOpen] = useState(false);
    // let count=0;

    function handleClick(e){
        if ( e.target.style.backgroundColor==="white"){
            e.target.style.backgroundColor="black";
            e.target.style.color="white"; 
            }
        else{
            e.target.style.backgroundColor="white";
            e.target.style.color="black"
        }                                                               
    }
    return (
        <>
            <div className="mainBox"  >
                <div className="box1">
                    <div className="addressBox">
                        <h3>Add a delivery address</h3>
                        <p>You seem to be in a new location</p>
                        <div className="addressCard" onClick={() => { setOpen(true) }}>
                            <Modal open={open} 
                            onClose={(e) => {e.stopPropagation(); setTimeout(()=>{setOpen(false)},250); document.querySelector(".modalBox").style.animationName='modalBoxRev'}} >
                                <Box className="modalBox">
                                    <div style={{display:"flex", alignItems:"center"}}>
                                    <p style={{paddingRight:"2%",cursor:"pointer"}} onClick={(e)=>{e.stopPropagation(); setTimeout(()=>{setOpen(false)},250); document.querySelector(".modalBox").style.animationName='modalBoxRev'}}>X</p>
                                    <h3> Save Delivery Address</h3>
                                    </div>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7777.096404264911!2d77.61412999088576!3d12.936733856052978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ffca9e051%3A0x452c086b281b4cbe!2sKHB%20Colony%2C%205th%20Block%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1691224866107!5m2!1sen!2sin"  style={{border:"0",marginTop:"5%"}}  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    <input type="text" placeholder="Address"/>
                                    <form >
                                        <input type="text" placeholder="Door/Flat No" style={{marginTop:"5%",borderBottom:"none"}}/>
                                        <input type="text" placeholder="Landmark" />
                                    <div>
                                        <p onClick={handleClick}><BiHomeAlt className=".logoss"/>Home</p>
                                        <p onClick={handleClick}><MdOutlineWorkOutline className=".logoss"/>Work</p>
                                        <p onClick={handleClick}><CiLocationOn className=".logoss" />Others</p>
                                    </div>
                                    </form>
                                    <button>SAVE ADDRESS AND PROCEED</button>
                                </Box>
                            </Modal>
                            <CiLocationOn  style={{ fontSize:"4rem",marginRight: "10px" }} />
                            <div className="miniBox">
                                <h3>Add New Address</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rerum alias eum ipsum placeat aliquid </p>
                                <button>ADD NEW</button>
                            </div>
                        </div>
                    </div>
                    <div className="paymentCard" >
                        <h3>Choose payment method</h3>
                    </div>
                </div>
                <div className="box2">
                    <h1> Cart Empty</h1>
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="Empty cart" />
                    <p>Good food is always cooking!</p>
                    <p>Go ahead,order some yummy items from the menu.</p>
                </div>

            </div>
            {/* <div className="paymentBox"></div> */}
        </>
    )
}

export default Address;