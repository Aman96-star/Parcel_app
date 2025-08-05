import ResturantCard from "./Resturantcard";
import RestaurantList from "../utils/mockdata";

const Body =()=>{
    return (
    <div className="res-container">
      {RestaurantList.map((res) => (
        <ResturantCard
          key={res.id}
          brand={res.brand}
          rating={res.rating}
          describe={res.describe}
          location={res.location}
          price={res.price}
          image={res.image}
        />
      ))}
    </div>
  );
};


export default Body;