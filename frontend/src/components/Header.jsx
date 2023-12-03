// import React from "react";
// import "./Header.css"
// function Header() {
//   document.addEventListener('DOMContentLoaded', function() {
//   window.onscroll = function() {myFunction()};
//   var header = document.getElementById("header");
//   var sticky = header.offsetTop;

//   function myFunction() {
//     if (window.pageYOffset > sticky) {
//       header.classList.add("sticky");
//     } else {
//       header.classList.remove("sticky");
//     }
//   }
// })
//   return (
//       <header id="header">
//     <nav id="nav-bar">
//     <div className="Heading">GarbageManager</div>
//       <ul>
//         <a className="nav-link" href="#LOGIN">Login</a>
//         <a className="nav-link" href="#SignUp">SignUp</a>
//       </ul>
//     </nav>
//   </header>

//   );
// }

// export default Header;
import "./Header.css";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Head,
} from "./NavbarElements";

function Header() {
  return (
    <div className="fa">
      <>
        <Nav className="bar">
          <Bars />
          
          <NavLink to='/' ><DeleteSweepIcon className="icon"/><Head className="title">GarbageManager</Head></NavLink>
          <NavMenu className="links">
            <NavLink to="/howtouse">HowtoUse</NavLink>
            <NavLink to="/team" activeStyle>
              The Team
            </NavLink>

            

            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <div className="buttons"><NavBtn>
            <NavBtnLink to="/signup">Sign Up</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn></div>
          
        </Nav>
      </>
    </div>
  );
}

export default Header;
