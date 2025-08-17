import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1>درباره ما</h1>
          <p>با ما همراه شوید تا دنیای برنامه‌نویسی را به روشی ساده و جذاب یاد بگیرید.</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src="/images/22.png" alt="Team" />
          </div>
          <div className="about-text">
            <h2>الهه عبدی - موسس وبسایت</h2>
            <p>
              این وبسایت با هدف آموزش برنامه‌نویسی برای مبتدیان و علاقه‌مندان به دنیای فناوری طراحی شده است. 
              شما می‌توانید از دوره‌های رایگان و پروژه‌های عملی استفاده کنید و مهارت‌های خود را بهبود دهید.
            </p>
            <p>
              تیم ما متشکل از اساتید با تجربه در زمینه فرانت‌اند و بک‌اند است و به شما کمک می‌کند مسیر یادگیری خود را سریع‌تر و جذاب‌تر طی کنید.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
