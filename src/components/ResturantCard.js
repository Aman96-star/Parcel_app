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
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN1YTzbCFblk5hT6Ttlw7OnQS1td-i_RFORw&s"
        />
        <h4>{props.brand}</h4>
        <h2>4.4/5</h2>
        <p>{props.describe}
        </p>
        </div>
    )
}

export default ResturantCard;