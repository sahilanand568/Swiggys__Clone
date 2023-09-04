import { useState, useEffect,useContext } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import Login from './Login'
import Footer from './Footer';
import { SearchUserContext } from '../App';


function Body() {
    
    const [data, setData] = useState([]);
    const [flag,setFlag]=useState(false);
    const [relevanceArr,setRelevanceArr]=useState([]);
    const {value,setValue}=useContext(SearchUserContext); 
    
    useEffect(() => {
        fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING").then(res => res.json()).then((res) => {
            console.log(res,"Pi");
            const newData=res?.data?.cards.filter((val)=>{
                return ((val.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined))
            })
            console.log(newData,"Chi");
            let tempData=[];
            newData.forEach((val)=>{
                // console.log(...val?.card?.card?.gridElements?.infoWithStyle?.restaurants,"CHiya");
                tempData=[...tempData,...val?.card?.card?.gridElements?.infoWithStyle?.restaurants]
            })
            let finalData=tempData.filter((val)=>{
                // console.log(val,"TESTING",val?.widgetId);
              return (val?.widgetId === undefined)
            })
            // console.log(emptyArr,"Chai");
            setRelevanceArr(finalData);
            setData(finalData);
            setValue(finalData);
        });
    }, []);

    console.log(data,"Ji");   
    // console.log(value,"This is inside Body comp");   
    
    let shimmerArr = [];
    if (data?.length === 0) {
        for (let i = 0; i < 12; i++) {
            shimmerArr.push(<Shimmer/>); 
        }
    }
    function handleClick(e){
         
        setFlag(!flag);
        
        if(e.target.innerHTML==="Relevance"){
            console.log(relevanceArr);
            setData([...relevanceArr]);
        }
        
        if(e.target.innerHTML==="Delivery Time"){
           
             data.sort(function(a,b){
             let aDeliveryTime=a.info.sla.deliveryTime;
             let bDeliveryTime=b.info.sla.deliveryTime;

             if(aDeliveryTime < bDeliveryTime)
             return -1;
            if(aDeliveryTime > bDeliveryTime)
            return 1;

        return 0;
            })
            // setData([...data]);
        }

        if(e.target.innerHTML==="Rating"){
             data.sort(function(a,b){
             let aAvgRating=a.info.avgRating;
             let bAvgRating=b.info.avgRating;
             
             if(aAvgRating < bAvgRating)
             return 1;
            if(aAvgRating > bAvgRating)
            return -1;
        
        return 0;
    })
            // setData([...data]);
        }
        
        if(e.target.innerHTML==="Cost:Low to High"){
            
            data.sort(function(a,b){
                
                let aCostForTwo=a.info.costForTwo;
                let bCostForTwo=b.info.costForTwo;
                
                if (aCostForTwo < bCostForTwo)
                return -1;
            if(aCostForTwo > bCostForTwo)
             return 1;
            
            return 0;
            })
            // setData([...data]);
        }

        if(e.target.innerHTML==="Cost:High to Low"){
            
             data.sort(function(a,b){
                 let aCostForTwo=a.info.costForTwo;
             let bCostForTwo=b.info.costForTwo;
             
             if (aCostForTwo < bCostForTwo)
             return 1;
            if(aCostForTwo > bCostForTwo)
             return -1;

            return 0;
        })
        // setData([...data]);
    }
    
    }

    // console.log(data);
    
    return ((data?.length === 0) ? <div className="body-container">{shimmerArr}</div> :
        (<>
            <div className='below-caraousel'>
                <h2 style={{ color: "#282c3f" }}>79 restaurants</h2>
                <ul className="filters">
                    <Link to="/?sortBy=RELEVANCE"><li onClick={handleClick}>Relevance</li></Link>
                    <Link to="/?sortBy=DELIVERY_TIME"><li onClick={handleClick}>Delivery Time</li></Link>
                    <Link to="/?sortBy=RATING"><li onClick={handleClick}>Rating</li></Link>
                    <Link to="/?sortBy=COST_FOR_TWO"><li onClick={handleClick}>Cost:Low to High</li></Link>
                    <Link to="/?sortBy=COST_FOR_TWO_H2L"><li onClick={handleClick}>Cost:High to Low</li></Link>
                    {/* <Link to="/"><h4 style={{ color: "#282c3f" }}>Filters</h4></Link> */}
                </ul>
            </div>
            <div className="body-container">
                {data?.map((val) => {
                    return <Link to={`/restaurant/${val.info.id}`}><RestaurantCard resData={val.info}/></Link>;
                })}
            </div>
            <Footer/>
            <Login/></>)
    )
}

export default Body;
