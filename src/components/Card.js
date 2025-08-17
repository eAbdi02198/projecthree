import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card({ title, text, img, teacher ,id}) {
  return (
    <div className="course-card">
      <img src={img} alt={title} />
      <div className="course-content">
        <h2>{title}</h2>
        <p>{text}</p>
        <p className="teacher">مدرس: {teacher}</p>
        <Link to={`/course/${id}`} className='course-link'>مشاهده دوره</Link>
      </div>
    </div>
  );
}
