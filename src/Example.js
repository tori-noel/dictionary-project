import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="example">
        {" "}
        <strong>example: </strong>"{props.example}"{" "}
      </div>
    );
  } else {
    return null;
  }
}
