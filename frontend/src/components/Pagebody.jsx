import React from 'react'
import "./pagebody.css"
function Pagebody(props) {
  return (
    <div>
      <div className="page" id={props.id}>
        <img src={props.src} alt={props.alt} className='imgs' id={props.imgid}></img>
        <p className='paratext' id={props.pid}>{props.content}</p>
      </div>
    </div>
  )
}

export default Pagebody
