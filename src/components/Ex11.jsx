import React, { useState } from "react";

export default function Ex11() {
  const [toDoList, setToDoList] = useState([
    { id: 1, name: "Code", status: false },
    { id: 2, name: "Quét nhà", status: false },
    { id: 3, name: "Giặt quần áo", status: false },
    { id: 4, name: "Lau nhà", status: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");
  // Check khi hoan thanh
  const handleChange = (todo) => {
    setToDoList(
      toDoList.map((t) => (t.id === todo.id ? { ...t, status: !t.status } : t))
    );
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newTask.trim()) {
      setError("Vui lòng nhập dữ liệu");
      return;
    }
    setToDoList([
      ...toDoList,
      { id: Date.now(), name: newTask, status: false },
    ]);
    setNewTask("");
    console.log(JSON.stringify(toDoList));
  };
  const handleDelete = (id) => {
    setToDoList(toDoList.filter((t) => t.id !== id));
  };
  const handleEdit = (id) => {};

  //   Add new

  return (
    <>
      <h2>Quản lý công việc</h2>
      <div>
        <form>
          <input
            type="text"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
          <button type="submit" onClick={handleAdd}>
            Thêm
          </button>
        </form>
        {error && <small style={{ color: "red" }}>{error}</small>}
      </div>

      {toDoList.map((todo) => {
        return (
          <div
            key={todo.id}
            style={{
              display: "flex",
              textAlign: "left",
              justifyContent: "space-between",
            }}
          >
            <div>
              <input
                type="checkbox"
                name={todo.id}
                onChange={() => handleChange(todo)}
              />
              {!todo.status ? <span> {todo.name}</span> : <s> {todo.name}</s>}
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <i
                className="fa-solid fa-trash"
                onClick={() => handleDelete(todo.id)}
              />
              <i
                className="fa-solid fa-pen"
                onClick={() => handleEdit(todo.id)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
