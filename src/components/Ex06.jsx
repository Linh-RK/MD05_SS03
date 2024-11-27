import React, { useState } from "react";

export default function Ex06() {
  // Tạo component <Count />
  // Sử dụng các kiến thức đã học về event, react hook để xây dựng một ứng dụng đếm số cơ bản
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((pre) => pre + 1);
  };
  return (
    <>
      <h2>Bạn đã click {count} lần</h2>
      <button onClick={handleClick}>Click</button>
      <hr />
    </>
  );
}
