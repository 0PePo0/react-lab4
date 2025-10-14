import { useState } from "react";
import Button from "./Button";

export default function AddTodoForm({ onAddTodo }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() !== "") {
      onAddTodo(text);
      setText("");
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
        style={styles.input}
      />
      <Button onClick={handleAdd} style={styles.button}>
        Add
      </Button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "8px 14px",
    cursor: "pointer",
  },
};
