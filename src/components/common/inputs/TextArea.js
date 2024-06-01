import React from "react";

const TextArea = ({ label }) => {
  return (
    <div className="inputs-wrapper">
      <label for="text-area" className="inputs-label">
        {label}
      </label>
      <textarea rows="4" id="text-area" type="text" className="text-area" />
    </div>
  );
};

export default TextArea;
