import React, { useEffect, useState } from 'react';
import "./Subtasks.css";
import Task from './Task';
import axios from 'axios';

function SubtaskList(props) {
  const userID = localStorage.getItem('userID');
  const [pincode, setPincode] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/worker/tasks/${userID}`);
        const pincodeData = response.data;
        setPincode(pincodeData);
        console.log('here');
        console.log(pincodeData);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className='subtaskdiv'>
      <Task pincode={pincode} />
    </div>
  );
}

export default SubtaskList;
