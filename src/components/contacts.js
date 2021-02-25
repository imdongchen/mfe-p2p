import React from "react";
import { Contact } from "./contact";

const data = [
  {
    id: 1,
    name: "Rico",
    photoUrl: "https://picsum.photos/48/48?random=1",
  },
  {
    id: 2,
    name: "Winston",
    photoUrl: "https://picsum.photos/48/48?random=2",
  },
  {
    id: 3,
    name: "Gracy",
    photoUrl: "https://picsum.photos/48/48?random=3",
  },
  {
    id: 4,
    name: "Willy",
    photoUrl: "https://picsum.photos/48/48?random=4",
  },
  {
    id: 5,
    name: "Ruby",
    photoUrl: "https://picsum.photos/48/48?random=5",
  },
];
export function Contacts({ onClick }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: 20,
      }}
    >
      {data.map((d) => (
        <Contact key={d.id} {...d} onClick={onClick} />
      ))}
    </div>
  );
}
