import React from "react";

export default function JavaScript() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#f0db4f" }}>JavaScript</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
        جاوااسکریپت یک زبان برنامه‌نویسی همه‌کاره است که بیشتر برای توسعه‌ی وب استفاده می‌شود.
        می‌توانید با آن صفحات تعاملی، اپلیکیشن‌های وب و حتی سرور-ساید برنامه‌نویسی کنید.
      </p>

      <h2 style={{ marginTop: "1.5rem" }}>نمونه کد ساده:</h2>
      <pre
        style={{
          background: "#282c34",
          color: "#61dafb",
          padding: "1rem",
          borderRadius: "8px",
          overflowX: "auto",
        }}
      >
        {`function greet(name) {
  return "سلام " + name + "!";
}

console.log(greet("الهه"));`}
      </pre>

      <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
        این نمونه کد یک تابع ساده است که یک پیام خوش‌آمدگویی چاپ می‌کند.
      </p>
    </div>
  );
}
