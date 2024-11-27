import React, { useState } from "react";

export default function Ex02() {
  // Tạo một state có giá trị khởi tạo là một đối tượng product (gồm các trường: id, name, price, quantity)
  // Truy cập state và hiển thị tên ra ngoài giao diện

  const [product, setProduct] = useState({
    id: 1,
    name: "Coca cola",
    price: 1000,
    qty: 10,
  });

  return (
    <>
      <div
        style={{ width: "350px", textAlign: "left", justifyContent: "center" }}
      >
        <h2>Thông tin sản phẩm</h2>
        <div>Id: {product.id}</div>
        <div>Name: {product.name}</div>
        <div>Price: {product.price}</div>
        <div>Quantity: {product.qty}</div>
      </div>
      <hr />
    </>
  );
}
