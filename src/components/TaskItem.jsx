function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <span className={task.completed ? "completed" : ""}>
        {task.title}
      </span>

      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;