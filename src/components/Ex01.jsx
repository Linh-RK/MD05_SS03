import React, { useState } from "react";

export default function Ex01() {
  const [name, setName] = useState("Pham Thi Thuy Linh");
  return (
    <>
      <h2>Ho va ten: {name}</h2>
      <hr />
    </>
  );
}
