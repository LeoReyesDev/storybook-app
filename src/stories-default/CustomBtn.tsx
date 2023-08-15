import React from "react";
import "./CustomBtn.css";

const CustomBtn = (props: any) => (
  <button onClick={props.onClick} style={props.style}>
    {props.label && <span>{props.label}</span>}
  </button>
);

export default CustomBtn;
