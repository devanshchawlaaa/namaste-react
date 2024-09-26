import { RESTUARANT_IMAGE } from "./utils/constants";

const RestuarantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, sla } = resData.info; 
    return (
        <div className='res-card'>
            <img className='res-logo' alt='res-logo' src={RESTUARANT_IMAGE} />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

export default RestuarantCard;