import React, { useState } from "react";

export default function Ex09() {
  // Tạo component <Radio />
  // Sử dụng các kiến thức đã học về event, react hook để thực hiện yêu cầu
  const genders = [
    { id: 1, gender: "Nam" },
    { id: 2, gender: "Nữ" },
    { id: 3, gender: "Khác" },
  ];
  const [check, setCheck] = useState(1);
  const handleClick = (id) => {
    setCheck(id);
  };
  return (
    <>
      <div>
        <h2>RADIO</h2>
        <div className="container" style={{ marginLeft: "50px" }}>
          <form>
            {genders.map((gender) => {
              return (
                <div key={gender.id} style={{ textAlign: "left" }}>
                  <label htmlFor={gender.id}>{gender.gender}</label>
                  <input
                    type="radio"
                    id={gender.id}
                    name="gender"
                    onChange={() => handleClick(gender.id)}
                    //
                    checked={gender.id === check}
                  />
                </div>
              );
            })}
          </form>
        </div>
      </div>
      <hr />
    </>
  );
}
