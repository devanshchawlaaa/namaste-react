import { RESTUARANT_IMAGE } from "./utils/constants";

const RestuarantCard = (props) => {
    const { resData } = props;
    const { name, cuisine, rating, time } = resData; 
    return (
        <div className='res-card' style={{ backgroundColor: '#f0f0f0' }}>
            <img className='res-logo' alt='res-logo' src={RESTUARANT_IMAGE} />
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating} Stars</h4>
            <h4>{time} Minutes</h4>
        </div>
    )
}

export default RestuarantCard;