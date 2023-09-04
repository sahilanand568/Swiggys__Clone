import React from 'react'
import { useEffect, useState } from 'react';
import Accordian from './Accordian'
import LongShimmer from './LongShimmer';

const PartnerBoarding = () => {

  const [data, setData] = useState();
  let arr=[];
  useEffect(() => {
    getPartnerInfo()
  }, []);

  async function getPartnerInfo() {

    const legalData = await fetch("https://www.swiggy.com/dapi/support/issues/partner-onboarding?");
    const json = await legalData.json();
    console.log(json.data.issues.data, "Relevant Data")
    setData(json.data.issues.data);

  }

  for (let i=0;i<5;i++){
    arr.push(<LongShimmer width="40"/>);
   }

  return (
    (data===undefined) ?  <div className="body-container">{arr}</div> :
    <div>
      <h2>Partner OnBoarding</h2>
      <div>
      {data?.map((val) => {
        return (<Accordian data={val} />)
      })}
      </div>
    </div>
  )
}

export default PartnerBoarding;