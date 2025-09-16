import mockRestaurantList from "../utils/mockdata";
import ResturantCard from "./Resturantcard";
import { useEffect, useState } from "react";

const Body = () => {
// const [RestaurantList, setRestaurantList] = useState(mockRestaurantList); 

//  use a fetch api 

const [RestaurantList, setRestaurantList] = useState([]); 


useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
  const json = await data.json();
  setRestaurantList( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
};


  return (
    <>
      <div className="body">
        <div className="filter">
          {/* here i am using a onclick event with callback function */}
          <div
            className="filter-btn"
            onClick={() => {
              // console.log("button clicked");
                 const FilterdList =RestaurantList.filter(
                  (res)=>res.rating>2
                );
                // console.log("filtered list",FilterdList);
                setRestaurantList(FilterdList);
            }}
          >
            top-rated resturants
          </div>
        </div>
        <div className="res-container">
          {RestaurantList.map((res) => (
            <ResturantCard

        
              key={res.id}
  name={res.name}                     // ✅ from data
  rating={res.rating}                 // ✅ from data
  // cuisine={res.cuisine.join(", ")}    // ✅ convert array → string
  location={res.location}             // ✅ from data
  price={res.price}                   // ✅ from data
  deliveryTime={res.deliveryTime} 
  image= {res.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
