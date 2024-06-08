import React from "react";

const Button = ({ text, fullwidth, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="app-button lets-talk"
      style={{ width: fullwidth ? "100%" : "fit-content" }}
    >
      {text}
    </button>
  );
};

export default Button;
