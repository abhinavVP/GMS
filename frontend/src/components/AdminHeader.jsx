import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Head,
  } from "./NavbarElements";
  import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
function AdminHeader() {
  return (
    <div>
       <div className="fa">
      <>
        <Nav className="bar">
          <Bars />
          
          <NavLink to='/' ><DeleteSweepIcon className="icon"/><Head className="title">GarbageManager</Head></NavLink>
          <NavMenu className="links">
            <NavLink to="/Heatmap">Heatmap</NavLink>
            <NavLink to="/AssignTask" activeStyle>
              AssignTask
            </NavLink>
            </NavMenu>
          <div className="buttons"><NavBtn>
            <NavBtnLink to="/">Logout</NavBtnLink>
          </NavBtn>
          </div>
          
        </Nav>
      </>
    </div>
    </div>
  )
}

export default AdminHeader