import React from 'react'
import DriverHeader from '../components/DriverHeader'
import "./drivertasks.css"
import SubtaskList from '../components/SubtaskList'
function DriverTasks() {
  return (
    <div className='driverTasks'>
    <div className='driverHeader'>
    <DriverHeader/>
    </div>
    <div className='taskDetails'>
    <h2>Tasks</h2>
    <div className='subTasks'>
    <SubtaskList/>
    </div>
    </div>
    </div>
  )
}

export default DriverTasks
