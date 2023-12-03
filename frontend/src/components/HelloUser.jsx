import React from 'react'
import "./HelloUser.css"
function HelloUser(props) {
  const name = localStorage.getItem('name');
  return (
    <div className='greeting'>
      <h3 className='namey'>Hello {name}</h3>
    </div>
  )
}

export default HelloUser
