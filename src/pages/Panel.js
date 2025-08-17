import React, { useEffect, useState } from 'react';
import './Panel.css';
import axios from 'axios';

export default function Panel() {
  const [paneldata, setPaneldata] = useState([]);

  useEffect(() => {
    axios
      .get("https://68a1e6ee6f8c17b8f5db0df3.mockapi.io/courseData")
      .then((res) => {
        setPaneldata(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="panel-long-container">
      <h2 className="panel-title">لیست دوره‌ها</h2>
      <div className="courses-container">
        {paneldata.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.img} alt={course.title} className="course-img" />
            <h3 className="course-title">{course.title}</h3>
            <p className="course-teacher">مدرس: {course.teacher}</p>
            <p className="course-price">{course.price} هزار تومان</p>
            <button className="course-btn">مشاهده جزئیات</button>
          </div>
        ))}
      </div>
    </div>
  );
}