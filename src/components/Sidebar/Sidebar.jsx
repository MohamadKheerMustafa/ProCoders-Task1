import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Reminder");
  const items = ["Reminder", "Notes", "History"];

  return (
    <div className="sidebar">
      <h1 className="title">Title</h1>
      {items.map((item, index) => (
        <a
          key={index}
          className={activeItem === item ? "active" : ""}
          href="#home"
          onClick={() => setActiveItem(item)}
        >
          {item}
        </a>
      ))}
      <button className="logout">Logout</button>
    </div>
  );
};

export default Sidebar;
