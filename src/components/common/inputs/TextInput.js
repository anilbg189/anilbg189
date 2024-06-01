import React from "react";

const TextInput = ({ label }) => {
  return (
    <div className="inputs-wrapper">
      <label for="text-input" className="inputs-label">
        {label}
      </label>
      <input id="text-input" type="text" className="text-input" />
    </div>
  );
};

export default TextInput;
