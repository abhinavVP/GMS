import React from 'react'
import "./body.css"

function Body() {
  
  return (
    <div className="" id="body">
      <img className='background' src={require("./background.jpg")} alt="background image"></img>
     <div className='textbox'>
     <h1 id='title'>Welcome to the Future of Waste Management!</h1>
     <h3 id="subtitle">Cleaning up our city, one bin at a time </h3>
     </div>
    </div>
  )
}

export default Body;
