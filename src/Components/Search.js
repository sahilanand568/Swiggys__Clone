import {useState,useEffect,useContext,useRef} from 'react';
import './Search.css';
import {CiSearch} from 'react-icons/ci';
import Login from './Login';
import { SearchUserContext } from '../App';
import SearchBoxCard from './SearchBoxCard';
import {Link} from 'react-router-dom';
 
function Search(){

const [data,setData]=useState();
const [filteredData,setFilteredData]=useState([]);
const inputRef=useRef();

useEffect(()=>{
getSearchInfo()
},[])

const {value}=useContext(SearchUserContext); 

// console.log(value,"This is in Search Component");
// console.log(filteredData,"This is Filtered Data in Search Component");
// console.log(value,"This is Value Data in Search Component");

async function getSearchInfo() {

    const searchData = await fetch("https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=12.9351929&lng=77.62448069999999");
    const json = await searchData.json();
    console.log(json,"Search Data");
    console.log(json?.data?.cards[1]?.card?.card?.imageGridCards?.info,"Search filtered Data");
    setData(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);

}

function handleChange(e){
    // value?.map((val)=>{
    //     console.log(val?.info.name?.toLowerCase(),"Lower Case Value info");
    //     console.log(e.target.value.toLowerCase(),"Lower Case Input Box info");
    //     return null} )
   setFilteredData(value?.filter((val)=>{return val?.info.name?.toLowerCase()?.includes(e.target.value.toLowerCase())}));
}
console.log(data,"Search Data");
    return(
        <>
        <div className="search__Page">
        <div className='input__Box'>
        <input ref={inputRef} onChange={handleChange} type="text" name="Search" placeholder="Search for restaurants and food" />
        <CiSearch style={{fontSize:"1.75rem"}} />
        </div>
        
         {(inputRef?.current?.value !=="" ) ? <>
            {filteredData?.map((val)=>{
                return <SearchBoxCard data={val} />
            })}
        </> :  
        <>
        <h2>Popular Cuisines</h2>
        <div className="popularCuisine__Images">
        {data?.map((val)=>{
         return (<img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + val.imageId} alt="Food Item" loading="lazy"/>)
        })}
        </div></>}
      </div>
        <Login/>
        </>
    )
}

export default Search;

{/* <Link to="search?query="></Link> */}