import React from "react";

function Badge({ text, color }) {
  return (
    <div className={color}>
      {text}
      <style jsx>{`
        div {
          padding: 2px 8px;
          display: inline-block;
          font-size: 12px;
          border-radius: 6px;
          margin: 2px;
        }
        .red {
          background-color: #b71c1c;
          color: #ef9a9a;
        }
        .blue {
          background-color: #0d47a1;
          color: #90caf9;
        }
        .green {
          background-color: #1b5e20;
          color: #a5d6a7;
        }
        .yellow {
          background-color: #f57f17;
          color: #fff59d;
        }
        .white {
          background-color: #f5f5f5;
          color: #424242;
        }
      `}</style>
    </div>
  );
}

export default Badge;
