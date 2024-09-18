import React from 'react';
import ReactDOM from 'react-dom';

const parent = React.createElement('div', {id:'parent'}, [
    React.createElement('div', {id:'child1'}, [
        React.createElement('h1', {id:'1h1'}, '1h1 dev'),
        React.createElement('h2', {id:'1h2'}, '1h2')
    ]),
    React.createElement('div', {id:'child2'}, [
        React.createElement('h1', {id:'2h1'}, '2h1'),
        React.createElement('h2', {id:'2h2'}, '2h2')
    ])
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent);