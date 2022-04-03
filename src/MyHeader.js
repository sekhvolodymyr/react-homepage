import React from 'react'

export default function MyHeader(){
  return(
    <div className = "my-head">
  <div className = "head-img">
  <img src="./apple.png" width ="200" height ="200" alt="img"></img>
  </div>
  <div className ="head-txt">
    <h1>Apple store</h1>
    <p className = "main-txt">
      <q className="quote">Don’t let the noise of others opinions drown out your own inner voice</q><br/>
      <span className ="author-link">- Steve Jobs</span> 
      </p>
  </div>
  </div>
  )
}