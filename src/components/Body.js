import mockRestaurantList from "../utils/mockdata";
import ResturantCard from "./Resturantcard";
import { useEffect, useState } from "react";

const Body = () => {
// hooks  state vriable

// normal js utility function
// -useEffect()  --- superpowerful state variable variable 
// -usestate ()


  // normal js variable
  // let RestaurantListjs =[
  //     {
  //       "id": 1,
  //       "name": "McDonald's",
  //       "rating": 1.6,
  //       "deliveryTime": "25-30 mins",
  //       "cuisine": ["Burgers", "Beverages", "Cafe"],
  //       "location": "Ameerpet metro, L&T Metro Rail",
  //       "price": "₹119",
       
  //     },
  //       {
  //         "id": 2,
  //         "name": "KFC",
  //         "rating": 1.9,
  //         "deliveryTime": "40-45 mins",
  //         "cuisine": ["Burgers", "Fast Food", "Rolls"],
  //         "location": "Concourse Level",
  //         "price": "₹59",
          
  //       },
  //       {
  //         "id": 3,
  //         "name": "Pizza Hut",
  //         "rating": 4.1,
  //         "deliveryTime": "40-45 mins",
  //         "cuisine": ["Pizzas"],
  //         "location": "SR Nagar",
  //         "price": "₹99",
          
  //       },
  //       {
  //         "id": 4,
  //         "name": "Burger King",
  //         "rating": 4.2,
  //         "deliveryTime": "30-35 mins",
  //         "cuisine": ["Burgers", "American"],
  //         "location": "Secunderabad",
  //         "price": "₹59",
          
  //       },
  // ];

  // const [RestaurantList,setRestaurantList] =useState([
  //    {
  //       "id": 1,
  //       "name": "McDonald's",
  //       "rating": 1.6,
  //       "deliveryTime": "25-30 mins",
  //       "cuisine": ["Burgers", "Beverages", "Cafe"],
  //       "location": "Ameerpet metro, L&T Metro Rail",
  //       "price": "₹119",
       
  //     },
  //     {
  //         "id": 2,
  //         "name": "KFC",
  //         "rating": 1.9,
  //         "deliveryTime": "40-45 mins",
  //         "cuisine": ["Burgers", "Fast Food", "Rolls"],
  //         "location": "Concourse Level",
  //         "price": "₹59",
          
  //       },
  //       {
  //         "id": 3,
  //         "name": "Pizza Hut",
  //         "rating": 4.1,
  //         "deliveryTime": "40-45 mins",
  //         "cuisine": ["Pizzas"],
  //         "location": "SR Nagar",
  //         "price": "₹99",
          
  //       },
  //       {
  //         "id": 4,
  //         "name": "Burger King",
  //         "rating": 4.2,
  //         "deliveryTime": "30-35 mins",
  //         "cuisine": ["Burgers", "American"],
  //         "location": "Secunderabad",
  //         "price": "₹59",
          
  //       }
  // ] );

  // const [RestaurantList,setRestaurantList] = useState(mockRestaurantList);/

  const arr =useState(mockRestaurantList);
  // const [RestaurantList,setRestaurantList] =arr;
  const RestaurantList =arr[0];
  const setRestaurantList =arr[1];

  // we are using useeffect hook
  useEffect(()=>{
    fetchData();
  },[])

  // console.log("now body is rendered"); this prove that after all the rendering useeffect is work
  
  const fetchData =async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

     const json = await data.json();

     console.log(json);
  }

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
