import { useState } from "react";

const colors = {
  dark2: "#021024",
  dark3: "#052659",
  light1: "#7DA0C4",
  light2: "#C1E8FF"
};

function TaskInput({ addTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} style={container}>
      
      <input
        type="text"
        placeholder="Add task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />

      <button type="submit" style={buttonStyle}>
        +
      </button>

    </form>
  );
}

export default TaskInput;

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "25px",
  gap: "10px",
};

const inputStyle = {
  width: "300px",
  padding: "12px 15px",
  borderRadius: "12px",
  border: "none",
  outline: "none",
  backgroundColor: colors.dark2,
  color: colors.light2, 
  fontSize: "14px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
};

const buttonStyle = {
  padding: "12px 18px",
  borderRadius: "12px",
  border: "none",
  backgroundColor: colors.dark3,
  color: colors.light2,
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  transition: "0.2s",
};