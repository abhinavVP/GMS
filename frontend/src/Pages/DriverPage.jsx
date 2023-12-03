import React from 'react'
import "./driverpage.css"
import DriverHeader from '../components/DriverHeader'
import BUody from '../components/bodyuser'
import HelloUser from '../components/HelloUser'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


function DriverPage() {
  return (
    <div className='driverPage'>
    <div className='driverHeader'>
    <DriverHeader/>
    </div>
    <div className='bodyDriver'>
    <HelloUser/>
        <BUody/>
    </div>
     
    </div>
  )
}

export default DriverPage
