import RestuarantCard from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { resList } from "./utils/mockData";
import { useState, useEffect } from "react";
   
const Body = () => {
    const [listOfRestuarants, setListOfRestuarants] = useState([]);
    const [filteredRestuarants, setFilteredRestuarants] = useState([]);
    const [searchText, setSearchText] = useState('');
    console.log('body rendered');
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch('https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0239923&lng=77.643294&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING', {
            headers: {
              'x-cors-api-key': 'temp_128f034413888285c88ec27fa9085acd',
            }
          });
        const jsonData = await data.json();
        setListOfRestuarants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestuarants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };
    if(listOfRestuarants.length === 0) {
        return <Shimmer />
    }
    return (
        <div className='body'>
            <div className='filter-btn res-container'>
                <input type='text'
                    value={searchText}
                    onChange={(e)=>{setSearchText(e.target.value)}}
                />
                <button 
                    className='login'
                    onClick={() => {
                        const filteredRest = listOfRestuarants?.filter((rest) => (
                            rest?.info?.name?.toLowerCase()?.includes(searchText?.trim()?.toLowerCase())
                        ))
                        setFilteredRestuarants(filteredRest);
                    }}
                >
                    Search
                </button>
                <button 
                    onClick={()=>{
                        const filteredList = listOfRestuarants?.filter((restuarant) => restuarant.info.avgRating >= 4.5)
                        setFilteredRestuarants(filteredList);
                    }}
                    onMouseOver={()=>{console.log("mouseover")}}
                >Top Rated Restuarants</button>
            </div>
            <div>
                <div className='res-container'>
                   {filteredRestuarants?.map((restuarant) =>  (
                    <RestuarantCard key={restuarant.info.name} resData = {restuarant} />
                   ))}
                </div>
            </div>
        </div>
    )
}

export default Body;