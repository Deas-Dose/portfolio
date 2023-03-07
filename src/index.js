import React from "react";
import ReactDOM from "react-dom"
import App from './App'
import './index.css'
import Nav from './components/nav/Nav'

ReactDOM.render(<App/>,document.querySelector('#blur'));
ReactDOM.render(<Nav />, document.getElementById('root'));



// JS code for other stuff
const blob = document.getElementById('blob');

document.body.onpointermove = event => {
  const { clientX, clientY } = event;
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, {duration: 200, fill: "forwards"});
}
