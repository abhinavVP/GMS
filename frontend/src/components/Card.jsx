import React from 'react';
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <img className='card-image' src={props.img} alt="Avatar" style={{ width: '100%' }} />
      <div className="container">
        <h4 className='name'><b>{props.name}</b></h4>
      </div>
    </div>
  );
}

export default Card;
