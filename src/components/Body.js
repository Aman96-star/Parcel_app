import ResturantCard from "./Resturantcard";

const Body =()=>{
    return(
        <div >
            
         {/* sdfdg */}
         
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

export default Body;