import TodoItem from "./TodoItem";

export default function TodoList({ tasks, onDelete }) {
  return (
    <ul style={styles.list}>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </ul>
  );
}

const styles = {
  list: { listStyle: "none", padding: 0, marginTop: "20px" },
};
