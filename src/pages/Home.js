import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import Card from '../components/Card';
import aks1 from '../images/55.avif'

export default function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("https://68a1e6ee6f8c17b8f5db0df3.mockapi.io/courseData")
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='home-page'>
      {/* بخش معرفی */}
      <div className="home-intro">
        <div className="intro-content">
          <div className="intro-text">
            <h1>برنامه نویسی با من</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quam unde ducimus, consequuntur dolor maxime quisquam quia modi sunt, hic aliquam quibusdam sit esse ipsam impedit dignissimos quod praesentium recusandae.
            </p>
          </div>
          <div className="intro-image">
            <img src={aks1} alt="Intro" />
          </div>
        </div>
      </div>

      {/* بخش دوره‌ها */}
      <div className="home-courses">
        <h1>لیست دوره‌ها</h1>
        <div className="courses-grid">
          {courses.map(course => (
            <div className="col" key={course.id}>
              <Card {...course}></Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
