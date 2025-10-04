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
    alignItems: "center",
    gap: "10px",        // відстань між input і кнопкою
    justifyContent: "center", // по центру екрана
    marginTop: "20px",
  },
  input: {
    width: "100px",    // 👈 зробив вужче
    height: "30px",
    padding: "0 10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#7ea17f",
    border: "none",
    outline: "none",
    cursor: "pointer",
    height: "30px",
    padding: "0 20px",
    borderRadius: "4px",
    fontSize: "16px",
  },
};
