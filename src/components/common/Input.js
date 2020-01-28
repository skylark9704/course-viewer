import React from "react";

function InputComponent(props) {
  const { name, type, label, placeholder, required, value } = props;

  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input
        name={name}
        type={type ? type : "text"}
        className="form-control"
        placeholder={placeholder && placeholder}
        required={required}
        defaultValue={value ? value : ""}
      />
    </div>
  );
}

export default InputComponent;
