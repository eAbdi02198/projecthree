import { Link } from "react-router-dom";
import "./MyNavbar.css";   // 👈 استایل جداگانه

const MyNavbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {/* سمت چپ */}
        <div className="left">My Page</div>

        {/* سمت راست */}
        <div className="right">
          <Link to="/" className="link">صفحه اصلی</Link>
          <Link to="/about" className="link">درباره ما</Link>
          <Link to="/panel" className="link">پنل</Link>
     
          <Link to="/article" className="link">مقالات</Link>
        
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
