import Button from "./Button";

export default function TodoActions({
  isEditing,
  onChangeClick,
  onSaveClick,
  onDeleteClick,
}) {
  return (
    <div style={styles.actions}>
      {isEditing ? (
        <Button
          style={{ ...styles.button, backgroundColor: "#7ea17fff" }}
          onClick={() => onSaveClick()}
        >
          Save
        </Button>
      ) : (
        <Button
          style={{ ...styles.button, backgroundColor: "#a3a3a3ff" }}
          onClick={() => onChangeClick()}
        >
          Change
        </Button>
      )}

      <Button
        style={{ ...styles.button, backgroundColor: "#c79d9dff" }}
        onClick={onDeleteClick}
      >
        Delete
      </Button>
    </div>
  );
}

const styles = {
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
