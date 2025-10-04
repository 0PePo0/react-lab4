import { useState } from "react";

export default function Checkbox({
  checked: initialChecked = false,
  onChange,
}) {
  const [checked, setChecked] = useState(initialChecked);

  const handleChange = () => {
    setChecked(!checked);
    if (onChange) onChange(!checked);
  };

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={handleChange}
      style={{ width: "18px", height: "18px" }}
    />
  );
}
