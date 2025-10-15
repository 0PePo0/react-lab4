import { useState } from "react";
import Checkbox from "./Checkbox";
import Button from "./Button";

export default function TodoItem({ task, onDelete, onToggle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.todo);

  const handleSave = () => {
    setIsEditing(false);

  };

  return (
    <li
      style={{
        ...styles.item,
        backgroundColor: task.completed ? "#ddd" : "#fff",
        textDecoration: task.completed ? "line-through" : "none",
      }}
    >
      <Checkbox
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

      <div style={styles.actions}>
        {isEditing ? (
          <Button
            style={{ ...styles.button, backgroundColor: "#7ea17fff" }}
            onClick={handleSave}
          >
            Save
          </Button>
        ) : (
          <Button
            style={{ ...styles.button, backgroundColor: "#a3a3a3ff" }}
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Button>
        )}
        <Button
          style={{ ...styles.button, backgroundColor: "#c79d9dff" }}
          onClick={() => onDelete(task.id)}
        >
          Delete
        </Button>
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
  actions: {
    display: "flex",
    gap: "5px",
  },
  button: {
    border: "none",
    color: "white",
    padding: "5px 10px",
    borderRadius: "3px",
    cursor: "pointer",
  },
};
