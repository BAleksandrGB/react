import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let links = [
  'home',
  'about',
  'portfolio',
  'contacts'
]




function crEl(arr) {
  const link = React.createElement(
    'a',
    {
      className: "link",
      list: "#"
    },
    name
  )

  const item = React.createElement(
    'li',
    { className: "item" },
    link
  )
}
const menu = React.createElement(
  'ul',
  {
    classname: "menu"
  },
  links.forEach(el=>{
    function crEl(el)
  })

)


ReactDOM.render(

  document.getElementsById('root')
);