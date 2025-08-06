// import { IMG_1 } from "../utils/constant";


// this is a javascript object
// const styleCard ={
// backgroundColor:"#f0f0f0"
// }


const ResturantCard =(props) =>{
    return(
        // here style we use object
        // <div className="res-card" style={styleCard}> 
        // <img
        // className="res-logo "
       
        // />
        // <h4>{props.brand}</h4>
        // <h2>4.4/5</h2>
        // <p>{props.describe}
        // </p>
        // </div>
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={props.image} alt={props.brand} />
      <h4>{props.brand}</h4>
      <h2>{props.rating} / 5</h2>
      <p>{props.describe}</p>
      <p>{props.location}</p>
      <p>{props.price}</p>
    </div>
    )
}

export default ResturantCard;
// no change