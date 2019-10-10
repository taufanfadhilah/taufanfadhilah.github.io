import React from "react";

function Badge({ text, color }) {
  return (
    <div className={`my__badge badge__` + color}>
      {text}
    </div>
  );
}

export default Badge;
