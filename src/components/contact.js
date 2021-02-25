import React from "react";

export function Contact({ name, photoUrl, onClick }) {
  return (
    <div>
      <img
        src={photoUrl}
        alt={name}
        style={{
          borderRadius: "50%",
          width: 64,
          height: 64,
        }}
        onClick={() => onClick(name)}
      />
      <div>{name}</div>
    </div>
  );
}
