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

const ResturantCard =() =>{
    return(
        <div className="res-card"> 
        <h3>pizzahut</h3>
        </div>
    )
}

const Body =()=>{
    return(
        <div >
            <div className="search">Search</div>
            <div className="res-container">
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



