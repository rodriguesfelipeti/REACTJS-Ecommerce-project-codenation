import React from "react";

const Button = (props) => {
  return (
    <button type="button" data-testid={props.testid} className={props.className} onClick={props.handleClick}>
      {props.titleButton}
      {props.children}
    </button>
  );
}

export default Button;
