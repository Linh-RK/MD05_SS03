import React, { useState } from "react";

export default function Ex03() {
  // Tạo một component đặt tên là ChangeColor.jsx
  // Tạo một văn bản có màu đen (black) và một nút để thay đổi màu chữ
  // Khi nhấn vào nút thì màu chữ chuyển từ màu đen sang màu đỏ
  const [color, setColor] = useState("black");
  const handleClick = () => {
    setColor(color === "black" ? "red" : "black");
  };
  return (
    <>
      <h2 style={{ color: color }}>Tiêu đề văn bản</h2>
      <button className="btn" onClick={handleClick}>
        Thay đổi màu
      </button>
      <hr />
    </>
  );
}
