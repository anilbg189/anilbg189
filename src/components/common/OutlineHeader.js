import React from "react";

const OutlineHeader = ({ text, style }) => {
  return (
    <div className="outline-header" style={style}>
      {text || ""}
    </div>
  );
};

export default OutlineHeader;
