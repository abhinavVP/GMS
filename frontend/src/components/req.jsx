import React from 'react'
import "./req.css"
function Req(props) {
  return (
    <div>
      <div className="req">
      <h3>Pincode : {props.pincode}</h3>
      <div className='something'>
      <h5>Total no of bags : {props.bagcount}</h5>
      <h5>Driver: {props.drivername}</h5>
      </div>
      
      
      
      </div>
    </div>
  )
}

export default Req
