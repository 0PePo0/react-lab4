import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

export default function AppTodoPage() {
  const [tasks, setTasks] = React.useState([]);

  const handleAddTask = (text) => {
    const newTask = { id: Date.now(), text };
    setTasks([...tasks, newTask]);
  };

  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: "center" }}>To-Do List</h1>
      <AddTodoForm onAddTodo={handleAddTask} />
      <TodoList
        tasks={tasks}
        onDelete={(id) => setTasks(tasks.filter((task) => task.id !== id))}
      />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontFamily: "Arial",
  },
};
