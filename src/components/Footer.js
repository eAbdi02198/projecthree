import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>درباره ما</h3>
          <p>این وبسایت برای آموزش برنامه‌نویسی با الهه عبدی طراحی شده است.</p>
        </div>

        <div className="footer-section">
          <h3>لینک‌های مفید</h3>
          <ul>
            <li><a href="/">خانه</a></li>
            <li><a href="/courses">دوره‌ها</a></li>
            <li><a href="/about">درباره ما</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>ما را دنبال کنید</h3>
          <div className="social-icons">
            <a href="#"><img src="../images/face-book.png" alt="Facebook" /></a>
            <a href="#"><img src="../images/اینساگرام.jpg" alt="Instagram" /></a>
            <a href="#"><img src="../images/توییتر.webp" alt="Twitter" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 برنامه نویسی با الهه. تمام حقوق محفوظ است.</p>
      </div>
    </footer>
  );
}
