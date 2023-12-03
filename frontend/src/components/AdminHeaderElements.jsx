// components/Navbar/navbarElements.js
 
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
    background: #ffffff;
    position:sticky;
    height: 85px;
    display: flex;
    margin-top:0em;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    border-bottom: 1px solid gainsboro ;
    /* Third Nav */
    /* justify-content: flex-start; */
`
export const Head=styled.nav`
font-family: "Times New Roman", Times, serif;
  color: black;
  display: flex;
  font-size: 2em;
  padding-top: 0.5em;
  padding-left: 0.4em;
  text-align: center;d
`
export const NavLink = styled(Link)`
    color: #121010;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: 'Noto Serif Old Uyghur', serif;
    font-weight:400;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #000000;
    }
`;
 
export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
 
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -240px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
  white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
 
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: -50px;
    padding-left:20px;
    padding-right:20px;

    /* Third Nav */
    /* justify-content: flex-end;
  width: 100vw; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
 
export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #03C04A;
    padding: 10px 22px;
    color: #ffffff;
    outline: none;
    font-family: 'Noto Serif Old Uyghur', serif;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ffffff;
        color: #000000;
    }
`;