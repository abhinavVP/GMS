import React from 'react'
import "./AddGarbagepg.css"
import HeaderUser from '../components/HeaderUser'
import Addtotrash from '../components/Addtotrash'
function AddGarbage() {
  return (
    <div className='Add'>
    <div className='Header'>
      <HeaderUser/>
    </div>
    <div className='functionality'>
    <Addtotrash/>
    </div>
      
    </div>
  )
}

export default AddGarbage
