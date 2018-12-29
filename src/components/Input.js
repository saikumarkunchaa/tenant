import React from "react";

const Input = props => {
  const width = {width : '50%'};
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
        class ="form-control"
        style = {width}
      />
    </div>
  );
};
export default Input;
