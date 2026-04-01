function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <div>
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