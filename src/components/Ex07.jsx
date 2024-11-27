import React, { useCallback, useState } from "react";

export default function Ex07() {
  // Tạo component <CounText />
  // Sử dụng các kiến thức đã học về event, react hook để thực hiện yêu cầu
  const [count, setCount] = useState(0);
  const handleChange = (numChar) => {
    setCount(numChar);
  };
  return (
    <>
      <h2>Đếm số kí tự nhập vào</h2>
      <textarea
        onChange={(e) => handleChange(e.target.value.length)}
        rows="4"
        cols="50"
      ></textarea>
      <div>Số kí tự: {count}</div>
      <hr />
    </>
  );
}
