import React from "react";
import "./assigntask.css";
import AdminHeader from "../components/AdminHeader";
import Req from "../components/req";
import { useState, useEffect } from "react";
import axios from "axios";
function AssignTaskpg(props) {
  const [tasks, setTasks] = useState({});
  useEffect(()=>{
    const fetchTasks = async ()=>{
      try {
        const response = await axios.get('http://localhost:5000/admin/requests/new');
        setTasks(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchTasks();
  },[])
  return (
    <div className="AssignTask">
      <div className="adminheader">
        <AdminHeader />
      </div>
      <div className="reqcollection">
      <div className="textcontent">
        
      </div> 
        <div className="subreq">
        <h2><u>Current Reqests</u></h2>
        {Object.keys(tasks).map((taskKey) => (
        <Req key={tasks[taskKey].id} pincode={taskKey} bagcount={tasks[taskKey].quantity} drivername={tasks[taskKey].driverName}/>
      ))}
        </div>
        
      </div>
    </div>
  );
}

export default AssignTaskpg;
