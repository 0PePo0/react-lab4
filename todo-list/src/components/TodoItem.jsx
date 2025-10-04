import { useState } from "react";
import TodoActions from "./TodoActions";
import Checkbox from "./Checkbox";

export default function TodoItem({ task, onDelete }) {
  const [checked, setChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("adasd");
  };

  const handleEdit = () => {
    setIsEditing(true);
    console.log("12312");
  };

  return (
    <li
      style={{
        ...styles.item,
        backgroundColor: checked ? "#b9b9b9ff" : "#fffdfdff",
      }}
    >
      <Checkbox
        checked={checked}
        onChange={(newChecked) => setChecked(newChecked)}
      />

      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          autoFocus
        />
      ) : (
        <span>{text}</span>
      )}

      <TodoActions
        isEditing={isEditing}
        onChangeClick={() => handleEdit()}
        onSaveClick={() => handleSave()}
        onDeleteClick={() => onDelete(task.id)}
      />
    </li>
  );
}

const styles = {
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    marginBottom: "5px",
    gap: "8px",
  },
};
