import React from 'react'
import Header from '../components/Header'
import "./Howtousepg.css"
import Footer from '../components/Footer'
import Pagebody from '../components/Pagebody'
function HowtoUsepg() {
  return (
    <div className='howtopg'>
      <Header></Header>
      <div className='intro'>
        <h2> How to Use the Platform ??</h2>
      </div>
      <Pagebody  className="pagebod"id="1" src={require("./addreq.png")}  alt='DashBoard' imgid="inropage" pid="overview" content="Your page be like this - request trash pickup"></Pagebody>
      <Pagebody className="pagebod" id="pg2" src={require("./subreq.png")} alt='DashBoard' imgid="increase"  pid="request" content="To get rid of the junk, choose how much, then hit that 'Submit Request' button!" ></Pagebody>
      <Pagebody  className="pagebod"id="3" src={require("./orderstat.png")} alt='DashBoard' imgid="discussion"  pid="discuss" content="Check Your Request Status Here " ></Pagebody>   
      <div className='outro'>
        <h3>That's How Simple It is!</h3>
        <h2>Try Your Hands at it</h2>
      </div>
      <Footer/>
    </div>
  )
}

export default HowtoUsepg
