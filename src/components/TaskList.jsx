function TaskList({ tasks, deleteTask, toggleTask }) {
  if (tasks.length === 0)
    return <p style={{ textAlign: "center" }}>No tasks</p>;

const container = {
  display: "flex",
  flexDirection: "column", // ✅ باش يجيو تحت بعضهم
  gap: "10px",
  alignItems: "center",
};

const taskCard = {
  width: "100%",
  maxWidth: "500px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px",
  borderRadius: "12px",
  backgroundColor: "#2B124C", // ✅ غامق
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
};

const deleteBtn = {
  backgroundColor: "#854F6C",
  color: "#FBE4D8",
  border: "none",
  padding: "6px 12px",
  borderRadius: "8px",
  cursor: "pointer",
};

  return (
    <div style={container}>
      {tasks.map((task) => (
        <div key={task.id} style={taskCard}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />

            <span
              style={{
                color: "#FBE4D8", // ✅ text واضح
                textDecoration: task.completed ? "line-through" : "none",
                fontWeight: "500",
              }}
            >
              {task.title}
            </span>
          </div>

          <button style={deleteBtn} onClick={() => deleteTask(task.id)}>
            Delete
          </button>

        </div>
      ))}
    </div>
  );
}

export default TaskList;