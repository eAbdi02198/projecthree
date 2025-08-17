import React from "react";

export default function Css() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#2965f1" }}>CSS</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
        CSS یا Cascading Style Sheets زبان طراحی و استایل‌دهی صفحات وب است.
        با CSS می‌توانید رنگ، فونت، فاصله، اندازه و چیدمان عناصر وب را کنترل کنید.
      </p>

      <h2 style={{ marginTop: "1.5rem" }}>نمونه کد ساده:</h2>
      <pre
        style={{
          background: "#1e1e1e",
          color: "#ffd700",
          padding: "1rem",
          borderRadius: "8px",
          overflowX: "auto",
        }}
      >
        {`body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

h1 {
  color: #2965f1;
  text-align: center;
}`}
      </pre>

      <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
        این نمونه کد ساده تغییر رنگ پس‌زمینه، فونت و رنگ تیتر را نشان می‌دهد.
      </p>
    </div>
  );
}
