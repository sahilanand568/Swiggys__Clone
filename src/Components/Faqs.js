import React from 'react'
import Accordian from './Accordian'
import {useEffect,useState} from 'react';
import LongShimmer from './LongShimmer';

const Faqs = () => {
    const [data,setData]=useState();
    let arr=[];
    useEffect(()=>{
     getFaqInfo()
    },[]);

    async function getFaqInfo(){    
    const legalData= await fetch("https://www.swiggy.com/dapi/support/issues/faq?");
    const json= await legalData.json();
    // console.log(json.data.issues.data,"Relevant Data")
    setData(json.data.issues.data);
    }
   
    for (let i=0;i<5;i++){
      arr.push(<LongShimmer width="40"/>);
     }

  return (
    (data===undefined) ?  <div>{arr}</div> :
    <div >
    <h2>FAQS</h2>
    {data?.map((val)=>{
    return (<Accordian data={val}/>)
    })}
    </div>
  )
}

export default Faqs