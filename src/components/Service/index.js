import React from 'react';
import './Service.css';

function Service({ title, imgUrl }) {
  return (
    <div className="service">
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="service__bg"
      />
      <h3 className="service__title">{title}</h3>
    </div>
  );
}

export default Service;
