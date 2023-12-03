import React from 'react'
import UserPage from './UserPage'
import UserTeam from './UserTeam'
import UserHowtoUsepg from './UserHowToUse'
import AddGarbage from './AddGarbage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderStatuspg from './OrderStatuspg'
function UserMainPg() {
  return (
    <div className='UserMainpg'>
      <Routes>
      <Route path='/' element={<UserPage/>}/>
      <Route path='/Userteam' element={<UserTeam/>}/>
      <Route path='/UserHowtoUse' element={<UserHowtoUsepg/>}/>
      <Route path='/AddGarbage' element={<AddGarbage/>}/>
      <Route path='/ReqStatus' element={<OrderStatuspg/>}/>
      </Routes>
    </div>
  )
}

export default UserMainPg
