import React from "react";
import "./Input.css"; 

const Input = ({ type, placeholder, name }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="input-field"
    />
  );
};

export default Input;
