// import { useLocation } from 'react-router';
import '../style/InfoAppart.css';
import './Main.jsx';
import './Host.jsx';
// import React from 'react';

function InfoAppart(props) {
  return (
    <div>
      <h1 className="info">{props.title}</h1>
      <span className="location">{props.location}</span>
      <div className="block-tags">
        {props.tags?.map((tag, index) => (
          <div key={`${index}-${tag}`} className="tags">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoAppart;
