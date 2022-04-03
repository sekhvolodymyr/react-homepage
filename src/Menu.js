import React from 'react'

export default  function Menu(){
  return (
<nav className ="Menu">
  
<ul>
  <li>
  <a className="navbar-brand" href="#home">
      
            <img src="./apple.png" width="24" alt="logo" height="24"></img>
      
</a>
  </li>
  <div className ="navBar">
  <li><a  href="#home">Home </a></li>
  <li><a href="#catalog">Catalog </a></li>
  <li><a href="#cart">Cart </a></li>
  </div>
</ul>
</nav>
  )
}