import React from "react";

const Input = (props) => {
  return (
    <input type={props.type} className={props.className} onClick={props.handleClick} onChange={props.handleChange} placeholder={props.placeholder}>
      {props.children}
    </input>
  );
}

export default Input;
