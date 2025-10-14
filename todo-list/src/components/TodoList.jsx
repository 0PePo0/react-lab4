import TodoItem from "./TodoItem";

export default function TodoList({ tasks = [], onDelete, onToggle }) {
  return (
    <ul style={styles.list}>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

const styles = {
  list: {
    listStyle: "none",
    padding: 0,
  },
};
