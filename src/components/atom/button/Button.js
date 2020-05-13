import React from "react";

function Button(props) {
  return (
    <button type="button" className={props.className} onClick={props.handleClick}>
      {props.titleButton}
      {props.children}
    </button>
  );
}

export default Button;
