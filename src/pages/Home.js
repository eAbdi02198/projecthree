import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import Card from '../components/Card';

export default function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("https://68a078926e38a02c5818cd15.mockapi.io/courseData")
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
              Omnis magni perspiciatis eveniet recusandae quae molestiae nemo culpa dolore fugiat soluta, ratione explicabo commodi. Velit, possimus ipsam! Quo alias consequatur doloribus ut numquam dignissimos, qui maxime commodi consequuntur recusandae.
              Voluptatibus fugit laborum, atque quos, alias necessitatibus rerum error earum libero saepe in sequi dolores aut, voluptatem blanditiis minima nisi unde aliquid numquam quod. Tempora voluptatum cum voluptates nesciunt enim!
            </p>
          </div>
          <div className="intro-image">
            <img src="/images/55.avif" alt="Intro" />
          </div>
        </div>
      </div>

      {/* بخش دوره‌ها */}
      <div className="home-courses">
        <h1>لیست دوره‌ها</h1>
        <div className="courses-grid">
     {courses.map(course=>{
        return <div className="col" key={course.id}>
            <Card {...course}></Card>
        </div>
     })}
        </div>
      </div>
    </div>
  );
}
