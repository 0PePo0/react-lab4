import { useState } from "react";

export default function TodoItem({ task, onDelete, onToggle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.todo);

  const handleSave = () => setIsEditing(false);

  return (
    <li
      style={{
        ...styles.item,
        backgroundColor: task.completed ? "#ddd" : "#fff",
        textDecoration: task.completed ? "line-through" : "none",
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      {isEditing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          autoFocus
        />
      ) : (
        <span>{text}</span>
      )}

      <div>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </li>
  );
}

const styles = {
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "6px",
  },
};
