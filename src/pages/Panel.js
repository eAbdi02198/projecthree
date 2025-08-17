import React from 'react';
import './Panel.css';

export default function Panel() {
  const panels = [
    {
      id: 1,
      title: "دوره ری‌اکت",
      text: "یادگیری ری‌اکت از صفر تا صد با الهه عبدی.",
      src:"/images/react-cover-500x286.jpg"
    },
    {
      id: 2,
      title: "دوره بوت‌استرپ",
      text: "طراحی سایت واکنش‌گرا و زیبا با Bootstrap.",
      src:"/images/bootstrap-500x286.png"
    },
    {
      id: 3,
      title: "دوره جاوااسکریپت",
      text: "تمرین و پروژه‌های عملی جاوااسکریپت.",
      src:"/images/js.jpg"
    }
  ];

  return (
    <div className="panel-long-container">
      {panels.map(panel => (
        <div className="panel-long-card" key={panel.id}>
          <div className="panel-long-img-placeholder">
            <img src={panel.src} alt={panel.title} className='panel-img'/>
          </div>
          <div className="panel-long-text">
            <h3>{panel.title}</h3>
            <p>{panel.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
