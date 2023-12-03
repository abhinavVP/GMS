import React from 'react'
import Header from '../components/Header';
import Body from '../components/body';
import HowToUse from '../components/HowToUse';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import "./LandingPage.css";
function LandingPage() {
  localStorage.clear();
  return (
    <div className='landingpg'>
      <Header/>
    <Body/>
    <HowToUse/>
    <AboutUs/>
    <Footer/>
    </div>
  )
}

export default LandingPage
