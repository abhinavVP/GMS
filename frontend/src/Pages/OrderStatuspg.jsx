import React, { useEffect, useState } from 'react';
import './OrderStatus.css';
import HeaderUser from '../components/HeaderUser';
import axios from 'axios';

function OrderStatuspg() {
  const userID = localStorage.getItem('userID');
  const [req, setReq] = useState({});
  const [driver, setDriver] = useState('');
  useEffect(()=>{
    const fetchReq = async () =>{
      try {
        const response = await axios.get(`http://localhost:5000/citizen/latestreq/${userID}`);
        setReq(response.data.latestreq);
        setDriver(response.data.driverName);
        console.log(req);
      } catch (error) {
        console.log(error)
      }
    }
    fetchReq();
  },[]);
//   const sentToDriver = (req.completionStatus==='sent-to-driver' || req.completionStatus==='completed')
  return (
    <div className='OrderStatus'>
      <div className='header'>
        <HeaderUser />
      </div>
      <div className='body'>
        <div className='pending'>
          <h1>
            <u>Current Request :</u>
          </h1>
          <div className='orders'>
            <p>Date of Request : {req.dateOfReq}</p>
            <p>Your Address : {req.address}</p>
            <p>Quantity : {req.quantity}</p>
            <p>Status : {req.completionStatus}</p>
            <p> Driver : {driver} </p> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderStatuspg;
