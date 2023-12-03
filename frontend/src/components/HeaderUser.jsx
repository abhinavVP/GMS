

import React from "react";
import "./HeaderUser.css"
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Head,
} from "./Navele.jsx";

function HeaderUser() {
  return (
    <div>
      <Nav className="bar">
          <Bars />
          <Head className="symbol">GarbageManager</Head>
          <NavMenu className="links">
            <NavLink to="/UserHowtoUse">HowtoUse</NavLink>
            <NavLink to="/Userteam" activeStyle>
              The Team
            </NavLink>
            <NavLink to="/AddGarbage" activeStyle>
              AddGarbage
            </NavLink>
            <NavLink to="/ReqStatus" activeStyle>
            Order Status
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/">Logout</NavBtnLink>
          </NavBtn>
          </Nav>
    </div>
  )
}

export default HeaderUser
