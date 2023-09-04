import './OfferCard.css';

function OfferCard({data}){
  return(
  <div className='offer__Card'>
     <div style={{display:"flex",alignItems:"center"}}>
     <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/" + data.offerLogo} alt="Logo" />
     <h4>{data.header}</h4>
     </div>
     <p>{data.description} | {data.couponCode}</p>
  </div>
  )
}

export default OfferCard;