function LongShimmer({width}){

    const shimmerStyle={
    height: "30vh",
    width: `${width}vw`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "1%",
    margin: "1%"
    };
    return(
        <div style={shimmerStyle} className="shimmer-container">
         <div className="shimmer-box">
         </div>
         <p></p>
         <p style={{width:"50%"}}></p>
        </div>
    )
}

export default LongShimmer;