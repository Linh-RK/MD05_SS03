import React, { useState } from "react";

export default function Ex04() {
  // Tạo một component đặt tên là Toggle.tsx
  // Một nút để thay đổi trạng thái ẩn của tiêu đề

  const [isShow, setIsShow] = useState(true);
  const handleClick = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      {isShow && <h2>Ẩn hiện tiêu đề</h2>}
      <button className="btn" onClick={handleClick}>
        {isShow === true ? "Ẩn" : "Hiện"}
      </button>
      <hr />
    </>
  );
}
