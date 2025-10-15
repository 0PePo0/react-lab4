import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import useTodos from "../hooks/useTodos";

export default function AppTodoPage() {
  const {
    todos, isLoading, error,
    addTodo, deleteTodo, toggleTodo, editTodoTitle,
    currentPage, totalTodos, limitPerPage,
    goToNextPage, goToPrevPage, searchTerm, setSearchTerm
  } = useTodos();

  return (
    <div style={{ maxWidth: "600px", margin: "30px auto", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>Todo List</h1>

      <AddTodoForm onAddTodo={addTodo} />

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search todos..."
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error.message}</p>}

      <TodoList
        tasks={todos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onEdit={editTodoTitle}
      />

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        <button onClick={goToPrevPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} / {Math.ceil(totalTodos / limitPerPage)}</span>
        <button onClick={goToNextPage} disabled={currentPage * limitPerPage >= totalTodos}>Next</button>
      </div>
    </div>
  );
}
