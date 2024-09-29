import {useState, useEffect} from 'react';
import Shimmer from './Shimmer';
import { RESTUARANT_MENU_URL } from './utils/constants';
import { useParams } from 'react-router';
const RestuarantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(RESTUARANT_MENU_URL+resId, {
            headers: {
              'x-cors-api-key': 'temp_128f034413888285c88ec27fa9085acd',
            }
          });
        const json = await data.json();
        setResInfo(json);
    }
    if (resInfo === null) {
        return <Shimmer />
    }
    const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (<div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards?.map((itemCard) => {
                        const {name, defaultPrice, price, id} = itemCard?.card?.info;
                        return <li key={id}>{name} - Rs.{(defaultPrice || price)/100}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default RestuarantMenu;