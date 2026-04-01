import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const colors = {
  dark1: "#190019",
  dark2: "#2B124C",
  dark3: "#522B5B",
  dark4: "#854F6C",
  light1: "#DFB6B2",
  light2: "#FBE4D8"
};

function App() {

  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
  });

  const [filter, setFilter] = useState("all");
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    if (!title.trim()) return;
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;

  return (
    <div style={dashboardStyle}>
      <header style={headerStyle}>
        <h1>Productivity Dashboard</h1>
      </header>

      <div style={statsContainer}>
        <StatCard title="Total Tasks" value={total} color={colors.dark2} />
        <StatCard title="Completed" value={completed} color={colors.dark3} />
        <StatCard title="Pending" value={total - completed} color={colors.dark4} />
      </div>

      <TaskInput addTask={addTask} />

      <div style={filtersContainer}>
        <FilterButton onClick={() => setFilter("all")} active={filter === "all"}>All</FilterButton>
        <FilterButton onClick={() => setFilter("completed")} active={filter === "completed"}>Completed</FilterButton>
        <FilterButton onClick={() => setFilter("pending")} active={filter === "pending"}>Pending</FilterButton>
      </div>

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  );
}

export default App;

const dashboardStyle = {
  minHeight: "100vh",
  padding: "20px 40px",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  backgroundColor: colors.dark1,
  color: colors.light2,
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "30px",
  color: colors.light2,
  textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
};

const statsContainer = {
  display: "flex",
  justifyContent: "space-around",
  marginBottom: "30px",
  flexWrap: "wrap",
};

const filtersContainer = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "20px",
};

const StatCard = ({ title, value, color }) => (
  <div style={{
    flex: "1 1 150px",
    margin: "10px",
    padding: "20px",
    borderRadius: "15px",
    backgroundColor: color,
    color: colors.light2,
    boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
    transition: "transform 0.2s",
    cursor: "default",
    textAlign: "center",
  }}
    onMouseEnter={e => e.currentTarget.style.transform="translateY(-5px)"}
    onMouseLeave={e => e.currentTarget.style.transform="translateY(0)"}
  >
    <h3 style={{ margin: "0 0 10px 0" }}>{title}</h3>
    <p style={{ fontSize: "24px", margin: 0 }}>{value}</p>
  </div>
);

const FilterButton = ({ onClick, active, children }) => (
  <button
    onClick={onClick}
    style={{
      padding: "10px 20px",
      margin: "0 5px",
      borderRadius: "10px",
      border: "none",
      backgroundColor: active ? colors.dark3 : colors.light2,
      color: active ? colors.light2 : colors.dark1,
      cursor: "pointer",
      fontWeight: "bold",
      transition: "all 0.2s",
    }}
    onMouseEnter={e => e.currentTarget.style.opacity="0.8"}
    onMouseLeave={e => e.currentTarget.style.opacity="1"}
  >
    {children}
  </button>
);