import React from 'react'
import DriverHeader from '../components/DriverHeader'
import UserTeam from './UserTeam'
import "./driverteam.css"
function DriverTeam() {
  return (
    <div className='driverteampg'>
      <DriverHeader/>
      <UserTeam/>
    </div>
  )
}

export default DriverTeam
