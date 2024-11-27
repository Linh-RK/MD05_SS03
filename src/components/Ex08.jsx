import React, { useState } from "react";

export default function Ex08() {
  // Tạo component <Select />
  // Sử dụng các kiến thức đã học về event, react hook để thực hiện yêu cầu

  const provinces = [
    { id: 1, province: "Hà Nội" },
    { id: 2, province: "Hà Nam" },
    { id: 3, province: "Ninh Bình" },
    { id: 4, province: "Thanh Hoá" },
    { id: 5, province: "Nghệ An" },
  ];
  const [province, setProvince] = useState("");
  const handleChange = (province) => {
    setProvince(province);
  };
  return (
    <>
      <div>
        <h2>Thành phố: {province}</h2>
        <form action="/action_page.php">
          <label htmlFor="cars">Chọn thành phố:</label>
          <select
            id="cars"
            name="cars"
            onChange={(e) => handleChange(e.target.value)}
          >
            <option value="">-- Chọn thành phố --</option>
            {provinces.map((province) => {
              return (
                <option key={province.id} value={province.province}>
                  {province.province}
                </option>
              );
            })}
          </select>
        </form>
      </div>
    </>
  );
}
