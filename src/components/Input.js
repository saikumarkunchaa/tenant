import React from "react";

const Input = props => {
  return (
    <div class="form-group">
      <label class="form-label">{props.title}:</label>
      <input
        type={props.type}
        value={props.value}
        name={props.name}
        title={props.title}
        id={props.name}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
  );
};
export default Input;
