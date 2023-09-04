import Login from './Login';
import './Help.css';
import {Link,Outlet} from 'react-router-dom';
import { useEffect } from 'react';

function Help(){

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
    console.log("Hi this is Scroll function")
    return ()=>{
      window.removeEventListener('scroll',handleScroll);
    }
  })
  
  function handleScroll(){

    if(window.scrollY>=100){
      document.querySelector(".help__mainBox").style.backgroundColor="white";
    }
    else{
      document.querySelector(".help__mainBox").style.backgroundColor="#37718e";
    }
  }
  
  return (<>
  <div className='help__mainBox'>
    <div className='help__TopBox'>
    <h1>Help & support</h1>
    <p>Lets take a step ahead and help you better</p>
    </div>
    <div className="help__InfoBox"> 
    <div className='help__ListBox'>
      <ul>
        <Link to="issues/partner-onboarding"><li tabIndex="1">Partner Boarding</li></Link>
        <Link to="issues/legal"><li tabIndex="2">Legal</li></Link>
        <Link to="issues/faq"><li tabIndex="3">FAQs</li></Link>
      </ul>
    </div>
    <div className='help__Outlet'>
      <Outlet/>
    </div>
    </div>
    <Login/>
  </div>
    </>
  )
}

export default Help;