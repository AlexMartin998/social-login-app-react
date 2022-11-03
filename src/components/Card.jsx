import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ id, title, img, desc, longDesc }) => {
  return (
    <div className="card">
      <span className="title">{title}</span>
      <img src={img} alt={img.desc} className="img" />
      <p className="desc">{desc}</p>

      <Link to={`/post/${id}`}>
        <button className="cardButton">Read Mode</button>
      </Link>
    </div>
  );
};
