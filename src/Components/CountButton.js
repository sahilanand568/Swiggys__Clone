import {useState} from 'react';
import { BiRupee } from 'react-icons/bi';


function CountButton({data,index,arr,setArr,flag,setFlag}){
    
    const [count, setCount] = useState(1);
    
    // if(data?.defaultPrice === undefined){
    //   setSum(sum +  (data.price / 100)*count);
    // }
    // else{
    //     setSum(sum + (data.defaultPrice / 100)*count);
    // } 
    // sum +=(data?.defaultPrice === undefined) ? (data.price / 100)*count : (data.defaultPrice / 100)*count; 
    arr[index]=(data?.defaultPrice === undefined) ? (data.price / 100)*count : (data.defaultPrice / 100)*count;
    console.log(arr,"Sum Array");
    setArr(arr);
      
    return(
        (count > 0) ? <><div className='item__Description'>
         {(data?.itemAttribute?.vegClassifier === "VEG") ? <img src="https://p.kindpng.com/picc/s/151-1515163_100-veg-logo-png-transparent-png.png" alt="Veg Logo" style={{ width: "0.75vw",objectFit:"contain" }} /> : <img src="https://clipground.com/images/non-veg-symbol-png-4.png" alt="Non-Veg Logo" style={{ width: "0.95vw",objectFit:"contain" }} />}
            <p style={{ fontWeight: "400",  color: "282C3F" }}>{data?.name}</p>
        </div>
        <div className='incrementDecrement'>
        <p onClick={()=>{setCount(count-1);setTimeout(()=>{setFlag(!flag)},150)}}>-</p> 
        <p>{count}</p>
        <p onClick={()=>{setCount(count+1);setTimeout(()=>{setFlag(!flag)},150)}}>+</p>
    </div>
    <p style={{ display: "flex", alignItems: "center", width: "30%", paddingLeft: "2%",marginLeft:"1vw" }}><BiRupee/>{(data?.defaultPrice === undefined) ? (data.price / 100)*count : (data.defaultPrice / 100)*count}</p>
    </> : null)
}

export default CountButton;