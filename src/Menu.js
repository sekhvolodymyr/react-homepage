import React from 'react'
import Catalog from './Catalog';
import App from './App';
import Card from './Card'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  NavLink,
  Link
} from "react-router-dom";

export default  function Menu(){
  return (
  <Router>  
<nav className ="Menu">
  
<ul>
  <li>
  <a className="navbar-brand" href="#home">
      
            <img src="./apple.png" width="24" alt="logo" height="24"></img>
      
</a>
  </li>
  <div className ="navBar">
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/catalog">Catalog</NavLink></li>
  <li><NavLink to="/card">Card</NavLink></li>
  <div className ="search-input">
  <input type="search" placeholder="Search.." name="search"/>
  <button type="submit"><i className="fa fa-search"></i></button>
  </div>
  </div>
</ul>

</nav>
</Router>

  )
}