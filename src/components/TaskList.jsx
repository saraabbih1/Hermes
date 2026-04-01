function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
   <div
  
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  }}
>
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />

          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              margin: "10px",
            }}
          >
            {task.title}
          </span>

          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;