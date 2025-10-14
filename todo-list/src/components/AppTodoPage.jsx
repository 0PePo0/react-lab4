import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import useTodos from "../hooks/useTodos";

export default function AppTodoPage() {
  const { todos, isLoading, error, addTodo, deleteTodo, toggleTodo } = useTodos();

  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: "center" }}>Список завдань</h1>

      <AddTodoForm onAddTodo={addTodo} />

      {isLoading && <p>Завантаження...</p>}
      {error && <p style={{ color: "red" }}>Помилка: {error.message}</p>}

      <TodoList tasks={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
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
