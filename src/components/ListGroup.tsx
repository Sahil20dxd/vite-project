import { useState } from "react";

function ListGroup() {
  let items = [
    "Sekriro: Shadow Die Twice",
    "Elden Ring",
    "God of War",
    "Call of Duty",
    "Tom Raider",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No Items found</p>}
        {items.map((items, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={items}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
