import React from "react";

const TextArea = ({ onChange, placeholder, value, label, type, rows }) => {
  return (
    <div className="form-group">
      <label className="lead">{label}</label>
      <textarea
        className="form-control"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  );
};

export default TextArea;
