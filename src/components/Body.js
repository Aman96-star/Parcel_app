import ResturantCard from "./Resturantcard";
import RestaurantList from "../utils/mockdata";
import { useFormState } from "react-dom";

const Body = () => {
// hooks  state vriable

  // normal js variable
  let RestaurantList =[
      {
        "id": 1,
        "name": "McDonald's",
        "rating": 1.6,
        "deliveryTime": "25-30 mins",
        "cuisine": ["Burgers", "Beverages", "Cafe"],
        "location": "Ameerpet metro, L&T Metro Rail",
        "price": "₹119",
       
      },
        {
          "id": 2,
          "name": "KFC",
          "rating": 1.9,
          "deliveryTime": "40-45 mins",
          "cuisine": ["Burgers", "Fast Food", "Rolls"],
          "location": "Concourse Level",
          "price": "₹59",
          
        },
        {
          "id": 3,
          "name": "Pizza Hut",
          "rating": 4.1,
          "deliveryTime": "40-45 mins",
          "cuisine": ["Pizzas"],
          "location": "SR Nagar",
          "price": "₹99",
          
        },
        {
          "id": 4,
          "name": "Burger King",
          "rating": 4.2,
          "deliveryTime": "30-35 mins",
          "cuisine": ["Burgers", "American"],
          "location": "Secunderabad",
          "price": "₹59",
          
        },
  ];
  
  return (
    <>
      <div className="body">
        <div className="filter">
          {/* here i am using a onclick event with callback function */}
          <div
            className="filter-btn"
            onClick={() => {
              // console.log("button clicked");
                RestaurantList =RestaurantList.filter(
                  (res)=>res.rating>2
                );
                console.log("filtered list",RestaurantList);
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
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
