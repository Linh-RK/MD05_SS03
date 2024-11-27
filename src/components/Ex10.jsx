import React, { useState } from "react";

export default function Ex10() {
  // Tạo component <Checkbox />
  // Sử dụng các kiến thức đã học về event, react hook để thực hiện yêu cầu
  const hobbies = [
    { id: 1, name: "Đi chơi" },
    { id: 2, name: "Code" },
    { id: 3, name: "Bơi lội" },
    { id: 4, name: "Nhảy dây" },
  ];
  const [myHobbies, setMyHobbies] = useState([]);
  const handleChange = (hb) => {
    if (myHobbies.some((h) => h.id === hb.id)) {
      let newArr = myHobbies.filter((h) => hb.id !== h.id);
      setMyHobbies(newArr);
    } else {
      setMyHobbies([...myHobbies, hb]);
    }
  };
  return (
    <>
      <h2>Sở thích: {myHobbies.map((h) => h.name)}</h2>
      <form>
        {hobbies.map((hobby) => {
          return (
            <div key={hobby.id}>
              <label htmlFor={hobby.id}> {hobby.name}</label>
              <input
                type="checkbox"
                id={hobby.id}
                name={hobby.id}
                onChange={() => handleChange(hobby)}
              />
            </div>
          );
        })}
      </form>
    </>
  );
}
