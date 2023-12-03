import React from 'react'
import "./adminpage.css"
import AdminHeader from '../components/AdminHeader'
import BUody from '../components/bodyuser'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
function AdminPage() {
  return (
    <div className='AdminPage'>
    <div className='adminheader'>
    <AdminHeader/>
    </div>
    <div className='bodyadmin'>
      <BUody/>
    </div>
     

    </div>
  )
}

export default AdminPage
