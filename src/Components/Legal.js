import React from 'react'
import Accordian from './Accordian'
import {useEffect,useState} from 'react';
import LongShimmer from './LongShimmer';

const Legal = () => {
    
    const [data,setData]=useState();
    let arr=[];
    useEffect(()=>{
     getLegalInfo()
    },[]);

    async function getLegalInfo(){    
    const legalData= await fetch("https://www.swiggy.com/dapi/support/issues/legal?");
    const json= await legalData.json();
    console.log(json.data.issues.data,"Relevant Data")
    setData(json.data.issues.data);
    }
   
    for (let i=0;i<5;i++){
     arr.push(<LongShimmer width="40"/>);
    }
    // console.log(data,"Heelo Shimmer Data");
  return (
    
    (data===undefined) ?  <div className="body-container">{arr}</div> :
    <div >
    <h2>Legal</h2>
    {/* <div>{arr}</div> */}
    {data?.map((val)=>{
    return (<Accordian data={val}/>)
    })}
    </div>
  
  )
}

export default Legal