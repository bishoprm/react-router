import React from "react";

export default function Movies(props) {
  return (
    <div>
      <p>{props.status}</p>
      <p>{props.data}</p>
    </div>
  );
}
