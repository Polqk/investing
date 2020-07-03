import React from 'react';
import ReactDom from 'react-dom';

let root = document.getElementById('root');
if (!root) {
    root = document.createElement('div');
    root.id = 'root';

    document.body.appendChild(root);
}


const App = () => {
    return (
        <h1>
            Hi from a react app Damian
        </h1>
    )
};

ReactDom.render(<App/>, root);