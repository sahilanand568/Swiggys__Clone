import { AiFillStar } from 'react-icons/ai';


function RestaurantCard({ resData }) {


    return (
        <div className="resCard">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_308,h_170,c_fill/" + resData?.cloudinaryImageId} alt="Food Pic" loading="lazy"/>
            <div>
            <h3 style={{ fontWeight: "600" }}>{resData?.name}</h3>
            <p style={{ color: "#686b78" }}>{resData?.cuisines.join(', ')}</p>
            <ul className="resCard-List">
                <li style={{ color: "white", backgroundColor: (resData?.avgRating >= 4) ? "#48C479" : ((resData?.avgRating >= 2.5) ? "#DB7C38" : "red") }}><AiFillStar style={{ fontSize: "0.8rem" }} />{resData?.avgRating}</li>
                <li>{resData?.sla.deliveryTime + " MINS"}</li>
                <li>{resData?.costForTwo}</li>
            </ul>
            </div>
        </div>
    )
};

export default RestaurantCard;