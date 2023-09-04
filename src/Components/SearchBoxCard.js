import {Link} from 'react-router-dom';
import './Search.css';

export default function SearchBoxCard({data}){

    return(<div className='search__BoxCard'>
        <Link to={`/restaurant/${data.info.id}`} style={{color:"#282C3F",textDecoration:"none"}}>
    <div>
    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_82,h_82,c_fill/" + data?.info?.cloudinaryImageId } alt="Food Pic" />
    <h3 >{data?.info?.name}</h3>
    </div></Link>
    </div>)
    // <h1>Restaurant + {data?.info?.name}</h1>)
}