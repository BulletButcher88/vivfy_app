import React from "react";

const Checkbox = props => {
  return (
    <label>
      <input
        type="checkbox"
        name={props.name}
        checked={props.isSelected}
        onChange={props.onCheckboxChange}
      />
      {props.children}
    </label>
  );
};

export default Checkbox;
