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
function DriverHeader() {
  return (
    <div>
       <div className="fa">
      <>
        <Nav className="bar">
          <Bars />
          
          <NavLink to='/' ><DeleteSweepIcon className="icon"/><Head className="title">GarbageManager</Head></NavLink>
          <NavMenu className="links">
            <NavLink to="/driverTasks">Tasks</NavLink>
            <NavLink to="/team" activeStyle>
              The Team
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

export default DriverHeader
