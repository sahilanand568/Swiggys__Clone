import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import {Link} from "react-router-dom";
import {useState} from "react";
import './Accordian.css';

function Accordian({data}) {
    
    const [isVisible,setIsVisible]=useState(false)

    return (
        <div className="accordian__Main" onClick={()=>{setIsVisible(!isVisible)}}>
            <div className="accordian__header">
                <h3>{data.title}</h3>
                {(isVisible) ? <MdOutlineKeyboardArrowUp style={{fontSize:"1.5rem",cursor:"pointer"}}/> : <MdOutlineKeyboardArrowDown style={{fontSize:"1.5rem",cursor:"pointer"}}/>}
            </div>
            {isVisible && <><p className="accordian__Text" >{data?.description}</p>
            <Link to={data.hyperLink} style={{textDecoration:"none"}}><p style={{color:"#fc8019",marginLeft:"0",fontWeight:"600"}}>{data?.hyperLinkText}</p></Link>
            {(data?.options.length!==0) && <>
                <button style={{padding:"3%",color:"#fc8019",background:"transparent",border:"1px solid #fc8019",fontWeight:"600",cursor:"pointer"}} onClick={(e)=>{e.stopPropagation()}}> SEND AN EMAIL</button>
                <p style={{fontSize:"0.65rem",marginLeft:"0",color: "#93959f"}}>We will revert within 24-48 hrs</p>
            </>}
            </>
            }

            {/* <Link to={data.hyperlink}></Link>   */}
        </div>
    )
}

export default Accordian;