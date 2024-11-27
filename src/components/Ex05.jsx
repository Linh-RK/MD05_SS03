import React, { useState } from "react";

export default function Ex05() {
  // Tạo một component đặt tên là Form.tsx
  // Tạo một input để lấy giá trị từ người dùng
  const [content, setContent] = useState("");
  const handleChange = (content) => {
    setContent(content);
  };
  return (
    <>
      <h2>Nội dung: {content}</h2>
      <input
        className="input"
        value={content}
        type="text"
        onChange={(event) => handleChange(event.target.value)}
        placeholder="Nhập nội dung..."
      ></input>
      <hr />
    </>
  );
}
