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

  const [RestaurantList,setRestaurantList] = useState(mockRestaurantList);

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
