import RestuarantCard from "./RestuarantCard";
import { resList } from "./utils/mockData";
import { useState } from "react";
   
const Body = () => {
    const [listOfRestuarants, setListOfRestuarants] = useState(resList);
    return (
        <div className='body'>
            <div className='filter-btn'>
                <button 
                    onClick={()=>{
                        const filteredList = listOfRestuarants?.filter((restuarant) => restuarant.rating >= 4.5)
                        setListOfRestuarants(filteredList);
                    }}
                    onMouseOver={()=>{console.log("mouseover")}}
                >Top Rated Restuarants</button>
            </div>
            <div>
                <div className='res-container'>
                   {listOfRestuarants?.map((restuarant) => (
                    <RestuarantCard key={restuarant.name} resData = {restuarant} />
                   ))}
                </div>
            </div>
        </div>
    )
}

export default Body;