import React from "react";

const Select = props => {
  return (
    <div class="form-group">
      <label>{props.title}: </label>
      <select
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
      >
        <option value="" disabled>
          {props.placeholder}
        </option>
        {props.options.map(option => {
          return (
            <option key={option} value={option} label={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
