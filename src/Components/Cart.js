import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import './Cart.css';
import './Address.css'
import { Link } from 'react-router-dom'
import Address from './Address';
import { CiLocationOn } from 'react-icons/ci';
import Login from './Login';
import CountButton from "./CountButton";
import { BiRupee } from 'react-icons/bi';
import { BiHomeAlt } from 'react-icons/bi';
import {MdOutlineWorkOutline} from 'react-icons/md';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import * as React from 'react';

function Cart() {

    const cartItems = useSelector((ReduxStore) => ReduxStore.cart.items);
    const [checked, setChecked] = useState(false);
    const [open, setOpen] = useState(false);
    const [flag, setFlag] = useState(false);
    const [arr,setArr]=useState([]);
    let sum=0;
    
    // console.log(cartItems, "Cart Items");
    useEffect(()=>{setTimeout(()=>{setFlag(true)},150)},[]);

    function handleClick(e){
        if (e.target.style.backgroundColor==="white"){
            e.target.style.backgroundColor="black";
            e.target.style.color="white"; 
            }
        else {   
            e.target.style.backgroundColor="white";
            e.target.style.color="black";
        }                                                               
    }
      
    console.log(arr,"Sum ArrayX",arr.length,"Hi");

    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum,"Testing Array");
    console.log(flag,"Testing out flag");

    return (<>
        {(cartItems.length === 0) ? <><div className='emptyCartPage-1'>
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="Empty cart" />
            <h3>Your cart is Empty</h3>
            <p>You can go to home page to view more restaurants</p>
            <Link to="/"><button><strong>SEE RESTAURANTS NEAR YOU</strong></button></Link>
        </div>
            <div className='emptyCartPage-2'>
                <Address />
            </div>
        </> : <div className="mainBox1">
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
                                        <p onClick={handleClick}><BiHomeAlt style={{ fontSize: "1.2rem"}}/>Home</p>
                                        <p onClick={handleClick}><MdOutlineWorkOutline style={{ fontSize: "1.2rem"}}/>Work</p>
                                        <p onClick={handleClick}><CiLocationOn style={{ fontSize: "1.2rem"}}/>Others</p>
                                    </div>
                                    </form>
                                    <button>SAVE ADDRESS AND PROCEED</button>
                                </Box>
                            </Modal>
                        <CiLocationOn style={{ fontSize: "4rem", marginRight: "10px", height: "0.5em" }} />
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
            <div className="box3">
                <div className='cartItems'>
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_50,h_50,c_fill/" + cartItems[0]?.imageId} alt="Food Pic" />
                    {/* <h3>{cartItems[0]?.name}</h3> */}

                    <div className="bill__Box">
                        {cartItems.map((vals,idx) => {
                           
                            return (
                                <div className='billBox__div'>  
                                   <CountButton key={vals.id} data={vals} index={idx} arr={arr} setArr={setArr} flag={flag} setFlag={setFlag} />  
                                   {/* {console.log(arr,"Array Parent X")} */}
                                </div> 
                            )
                        })}
                        <input type="text" placeholder='Any suggestions? We will pass it on...' className='suggestion__Box' />
                        <div className="noContact__Delivery">
                            <input type="checkbox" style={{ marginRight: "1vw",cursor:"pointer" }} onClick={() => { setChecked(!checked) }} /> 
                            {(checked) ? <><span><strong>Opt for No-Contact Delivery</strong></span>
                                <p style={{ color: "#282C3F" }}>Our delivery partner will call to confirm. Please ensure that your address has all the required details.</p></> : <><span><strong>Opt for No-Contact Delivery</strong></span><p style={{ color: "#282C3F" }}>Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)</p></>}
                        </div>
                        <div className="bill__Details">
                        <p>Bill Details</p>
                        <div className='commonStyle' style={{display:"flex",alignItems:"center",borderBottom:"1px solid #e9e9eb"}} >
                            <p>Item Total</p>
                            {/* {console.log(sum,"Just Above Display")} */}
                            <p style={{display:"flex",alignItems:"center"}}><BiRupee/>{sum}</p>
                            {/* {console.log(sum,"Just Below Display")}  */}
                        </div>
                        <div className='commonStyle'>
                            <p>Platform Fee</p>
                            <p style={{display:"flex",alignItems:"center"}}> <BiRupee/> {(sum!=0) ? 2 :0 }</p>
                        </div>
                        <div className='commonStyle' style={{display:"flex",alignItems:"center",borderBottom:"2px solid #282c3f"}}>
                       <p>GST and Restaurant Charges</p> 
                       <p style={{display:"flex",alignItems:"center"}}><BiRupee/>{(0.12*sum).toFixed(2)}</p>
                        </div>
                        </div>
                    </div>
                    <div className='to__Pay'>
                    <h4>TO PAY</h4>
                    <h4 style={{display:"flex",alignItems:"center"}}><BiRupee/>{(sum!=0) ? ((1.12*sum) + 2).toFixed(2) : 0}</h4>
                    </div>
                </div>
            <div className="cancellation__Policy">
               <div>
               <h4>Review your order and address details to avoid cancellations</h4>
               <p><span style={{color:"red"}}>Note:</span>If you cancel within 60 seconds of placing your order, a 100% refund will be issued. No refund for cancellations made after 60 seconds.</p>
               <p style={{color:"#808080"}}>Avoid cancellation as it leads to food wastage.</p>
               <Link to="https://www.swiggy.com/refund-policy" target='_blank'>Read Cancellation Policy</Link>
               </div>
            </div>
            </div>
        </div>
        }
        <Login />
    </>
    )
}

export default Cart;









