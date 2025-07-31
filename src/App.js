import React from "react";
import ReactDOM from "react-dom/client";

/**
 *header
 -logo
 -nav items

 * body
 -search
 -resturant container
 -resturant card

 * footer
 -copywrite
 -links 
 -address
 -contact
  **/
const Header =() =>{
return(
 <>
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://brandlogo.org/wp-content/uploads/2024/09/Perplexity-AI-App-Icon-2023.png.webp"
        alt="Logo"
      />
    </div>

    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Add to Cart</li>
        <li>Wishlist</li>
      </ul>
    </div>
  </div>
</>
)
}

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

const Body =()=>{
    return(
        <div >
            <div className="search">Search</div>
            <div className="res-container">
                <ResturantCard
                brand ="pizzahut"
                describe="a delicious food from pizzahut"
                />
                <ResturantCard 
                
                brand ="dominos"
                describe ="best pizza"
                />
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                
                
            </div>
        </div>
    )
}

 const AppLayout =() =>{
  
    return(
        <div className="app">
            <Header/>
            <Body/>
          

        </div>
    )
 }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>); // ✅ Pass the element here



