import React from "react";

function InputComponent(props) {
  const { name, type, label, placeholder, required } = props;

  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input
        name={name}
        type={type ? type : "text"}
        className="form-control"
        placeholder={placeholder && placeholder}
        required = {required}
      />
    </div>
  );
}

export default InputComponent;
