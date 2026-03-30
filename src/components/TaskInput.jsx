import { useState } from "react";

function TaskInput({ addTask }) {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title.trim() === "") return;
    addTask(title);
    setTitle("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ajouter une tâche..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Ajouter</button>
    </div>
  );
}

export default TaskInput;