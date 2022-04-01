import React from 'react'

export default function MyHeader(){
  return(
    <div className = "my-head">
  <div className = "head-img">
  <img src="./logo192.png" width ="200" height ="200" alt="img"></img>
  </div>
  <div className ="head-txt">
    <h1>Heading</h1>
    <p className = "main-txt">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
  </div>
  </div>
  )
}