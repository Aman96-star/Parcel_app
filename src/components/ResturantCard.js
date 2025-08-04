import { IMG_1 } from "../utils/constant";


// this is a javascript object
const styleCard ={
backgroundColor:"#f0f0f0"
}


const ResturantCard =(props) =>{
    return(
        // here style we use object
        <div className="res-card" style={styleCard}> 
        <img
        className="res-logo "
        src={IMG_1}
        />
        <h4>{props.brand}</h4>
        <h2>4.4/5</h2>
        <p>{props.describe}
        </p>
        </div>
    )
}

export default ResturantCard;