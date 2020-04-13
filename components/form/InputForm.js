import React from "react";

const InputForm = ({ onChange, placeholder, value, label, type }) => {
  return (
    <div className="form-group">
      <label className="text-muted">{label}</label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        className="form-control"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputForm;
