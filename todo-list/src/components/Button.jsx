  export default function Button({ onClick, children, ...props }) {
    return (
      <button
        style={{ ...style.button, backgroundColor: "#9e9e9eff" }}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }

  const style = {
    button: {
      border: "none",
      color: "white",
      padding: "5px 10px",
      borderRadius: "3px",
      cursor: "pointer",
    },
  };
