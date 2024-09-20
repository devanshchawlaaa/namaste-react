import React from 'react';
import ReactDOM from 'react-dom';

const HeadingComp = () => <h1>Namastee</h1>
const num = 25;
const TitleComp = (
    <div>
        {HeadingComp()}
        <h1>Devansh {num}</h1>
        <h2>{console.log('h2')} 7 </h2>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(TitleComp);