import React from 'react'
import './Reacti.css' // می‌تونیم استایل جداگانه بذاریم

export default function Reacti() {
  return (
    <div className="reacti-page">
      <h1>مقدمه‌ای بر React</h1>
      <p>
        React یک کتابخانه جاوااسکریپت برای ساخت رابط‌های کاربری تعاملی است.
        با استفاده از React می‌توانیم کامپوننت‌های قابل استفاده مجدد بسازیم.
      </p>

      <h2>ویژگی‌های مهم React</h2>
      <ul>
        <li>کامپوننت محور (Component-based)</li>
        <li>Virtual DOM برای رندر سریع</li>
        <li>یک‌طرفه بودن جریان داده (One-way Data Flow)</li>
        <li>پشتیبانی از هوک‌ها (Hooks) برای مدیریت state و اثرات جانبی</li>
      </ul>

      <p>
        با یادگیری React می‌توانیم اپلیکیشن‌های وب مدرن و قابل توسعه بسازیم.
      </p>
    </div>
  )
}
