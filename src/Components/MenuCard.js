import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { BiRupee } from 'react-icons/bi';
import { useDispatch } from "react-redux";
import './MenuCard.css';
import LongShimmer from './LongShimmer';
import { addItem } from "../Utils/cartSlice";
import { AiFillStar } from 'react-icons/ai'
import OfferCard from './OfferCard';
import { HiOutlineCurrencyRupee } from 'react-icons/hi'
import Login from './Login';


function MenuCard() {

  const [fixedData, setFixedData] = useState({});
  const [infoData, setInfoData] = useState({});
  const [offers, setOffers] = useState();
  const [menu, setMenu] = useState({});
  const [fssai, setFssai] = useState();
  const [flag, setFlag] = useState(false);
  const { resId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getRestaurantInfo();
  }, [])


  async function getRestaurantInfo() {

    const menuData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + resId + "&submitAction=ENTER");
    const json = await menuData.json();
    // console.log(json, "Yooo");
    setInfoData(json.data.cards[0].card.card.info);
    setOffers(json.data.cards[1].card.card?.gridElements?.infoWithStyle?.offers);
    const data = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // console.log(data,"Yo");
    const newData = data.map((val) => {
      return (val?.card?.card);
    })
    console.log(newData, "NEW_DATA");
    setMenu(newData.filter((val) => { return (val?.itemCards !== undefined) }));
    setFixedData(newData.filter((val) => { return (val?.itemCards !== undefined) }));
    setFssai(newData?.filter((val) => { return (val?.itemCards === undefined) }));
  }
  // console.log(infoData,"INFO")
  console.log(menu, "Dataa");
  console.log(fixedData, "Fixed Data");
  //  console.log(fssai,"Pika");

  function handleAddClick(vals) {
    dispatch(addItem(vals));
  }

  let shimmerArr = [];

  for (let i = 0; i < 12; i++) {
    shimmerArr.push(<LongShimmer width="50" />);
  }
  // console.log(offers,"Offers");
  // console.log(fssai,"FSSAI")
  return (
    <>
      {(menu?.length === undefined) ? <div style={{ width: "50%", margin: "auto" }}>{shimmerArr}</div> :
        <>
          <div className="header__Menu">
            <div className="header__MenuBox1">
              <h3>{infoData?.name}</h3>
              <p>{infoData?.cuisines.join(",")}</p>
              <p>{infoData?.areaName},{infoData?.sla?.lastMileTravelString}</p>
            </div>
            <div className="header__MenuBox2">
              <div className="ratingBox">
                <AiFillStar style={{ color: (infoData?.avgRating >= 4) ? "#3d9b6d" : ((infoData?.avgRating >= 2.5) ? "#DB7C38" : "red") }} />
                <h4 style={{ color: (infoData?.avgRating >= 4) ? "#3d9b6d" : ((infoData?.avgRating >= 2.5) ? "#DB7C38" : "red") }}>{infoData?.avgRating}</h4>
              </div>
              <p>{infoData?.totalRatingsString}</p>
            </div>
          </div>
          <div className="info__Box">
            <h3><svg style={{ marginRight: "1vw" }} width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle r="8.35" transform="matrix(-1 0 0 1 9 9)" stroke="#3E4152" stroke-width="1.3"></circle><path d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z" fill="#3E4152"></path></svg>{infoData?.sla?.slaString}</h3>
            <h3><HiOutlineCurrencyRupee className="rupee__Icon" style={{ marginRight: "1vw" }} />{infoData?.costForTwoMessage}</h3>
          </div>
          <div className="offers">
            {offers.map((val) => {
              return (<OfferCard key={val?.info?.restId} data={val?.info} />)
            })}
          </div>
          <div className="vegOnly">
            <h4 >Veg Only</h4>
            {(flag) ? <div onClick={() => { setFlag(false) }} style={{backgroundColor: "#008000"}} className="vegOnly__Box">
              <img src="https://p.kindpng.com/picc/s/151-1515163_100-veg-logo-png-transparent-png.png" alt="Veg Logo" className="new__logo"  />
            </div> : <div onClick={() => { setFlag(true) }} className="vegOnly__Box" style={{backgroundColor: "#d4d5d9"}}><div className="empty__Box" ></div></div>}
          </div>
          {menu?.map((val) => {
            const temp = val?.itemCards.filter((vals) => { return (vals?.card?.info?.itemAttribute?.vegClassifier === "VEG") })
            return (<>
              <div className="blank__Space"></div>
              {(!flag) ? <h3 className="menuItems__heading" >{val?.title}({val?.itemCards?.length})</h3> : <h3 className="menuItems__heading" >{val?.title}({temp.length})</h3>}
              {val?.itemCards?.map((vals) => {
                return (
                  (flag) ? (vals?.card?.info?.itemAttribute?.vegClassifier === "VEG") ? <div className="food__Box"><div className="food-item">
                    <img src="https://p.kindpng.com/picc/s/151-1515163_100-veg-logo-png-transparent-png.png" alt="Veg Logo" className="logo" />
                    <h4>{vals?.card?.info?.name}</h4>
                    <span><BiRupee /> {(vals?.card?.info?.price !==undefined) ? vals?.card?.info?.price / 100 : vals?.card?.info?.defaultPrice/100 }</span>
                    <p>{vals?.card?.info?.description}</p>
                    <button onClick={() => { handleAddClick(vals?.card?.info) }}>ADD</button>
                  </div>
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + vals?.card?.info?.imageId} alt="Food Item" className="media__Image" />
                  </div> : null
                    :
                    <div className="food__Box">
                      <div className="food-item">
                        {(vals?.card?.info?.itemAttribute?.vegClassifier === "VEG") ? <img src="https://p.kindpng.com/picc/s/151-1515163_100-veg-logo-png-transparent-png.png" alt="Veg Logo" className="logo" /> : <img src="https://clipground.com/images/non-veg-symbol-png-4.png" alt="Non-Veg Logo" className="logo"/>}
                        <h4>{vals?.card?.info?.name}</h4>
                        <span><BiRupee /> {(vals?.card?.info?.price !==undefined) ? vals?.card?.info?.price / 100 : vals?.card?.info?.defaultPrice/100 }</span>
                        <p>{vals?.card?.info?.description}</p>
                        <button onClick={() => { handleAddClick(vals?.card?.info) }}>ADD</button>
                      </div>
                      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + vals?.card?.info?.imageId} alt="Food Item" className="media__Image" />
                    </div>)
              }
              )
              }
            </>)
          })}
          <div className="fssai__Box1">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_80,h_40/" +
              fssai[fssai.length - 2].imageId} alt="FSSAI Logo" />
            <p>{fssai[fssai.length - 2].text[0]}</p>
          </div>
          <div className="fssai__Box2">
            <h4>{fssai[fssai.length - 1].name}</h4>
            <p>(Outlet:{fssai[fssai.length - 1].area})</p>
            <p >{fssai[fssai.length - 1].completeAddress}</p>
          </div></>}
          <Login/>
    </>
  )
}

export default MenuCard;
