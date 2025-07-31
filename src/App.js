import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
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



