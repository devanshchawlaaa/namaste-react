import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo" 
                    src="https://logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestuarantCard = (props) => {
    const { resData } = props;
    const { name, cuisine, rating, time } = resData; 
    return (
        <div className='res-card' style={{ backgroundColor: '#f0f0f0' }}>
            <img className='res-logo' alt='res-logo' src='data:image/png;base64,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'></img>
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating} Stars</h4>
            <h4>{time} Minutes</h4>
        </div>
    )
}
const resList = [
    {
        name: 'ABC Rest',
        cuisine: 'North Indian',
        rating: '4.4',
        time: '38'
    },
    {
        name: 'DEF Rest',
        cuisine: 'South Indian',
        rating: '4.5',
        time: '39'
    },
    {
        name: 'GHI Rest',
        cuisine: 'Chinese',
        rating: '4.6',
        time: '31'
    },
    {
        name: 'JKL Rest',
        cuisine: 'Biryani',
        rating: '4.7',
        time: '32'
    },
    {
        name: 'MNO Rest',
        cuisine: 'Chicken',
        rating: '4.1',
        time: '33'
    },
    {
        name: 'PQR Rest',
        cuisine: 'Arabic',
        rating: '4.2',
        time: '34'
    },
    {
        name: 'STU Rest',
        cuisine: 'Italian',
        rating: '4.3',
        time: '35'
    }
]

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                Search
            </div>
            <div>
                <div className='res-container'>
                   {resList?.map((restuarant) => (
                    <RestuarantCard key={restuarant.name} resData = {restuarant} />
                   ))}
                </div>
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />);