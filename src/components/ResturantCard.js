
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
        alt="res-logo"
        src="https://res.cloudinary.com/dng2nnvlc/image/upload/v1753969266/photo_2023-10-01_17-57-21_azutqf.jpg"
        />
        <h4>{props.brand}</h4>
        <h2>4.4/5</h2>
        <p>{props.describe}
        </p>
        </div>
    )
}

export default ResturantCard;