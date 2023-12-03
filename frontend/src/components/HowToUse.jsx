import React from 'react'
import "./HowToUse.css"
function HowToUse() {
  return (
    <div className='howtouse'>
      <h1 className='head'>What do we do?</h1>
      <p className='intro'>We empower citizens to request garbage collection services and proactively inform the municipal corporation about these requests, thereby facilitating the efficient allocation of government resources</p>
      <img src={require("./boy.png")} alt='user using laptop' className='boy'></img>
      <br></br>
    </div>
  )
}

export default HowToUse;
