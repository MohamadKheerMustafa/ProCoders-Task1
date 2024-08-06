import React from "react";
import "../Navbar/Navbar.css";
import Avatar from "../Avatar/Avatar";

const Navbar = () => {
  return (
    <div className="main">
      <ul className="main-ul">
        <li className="li-styles">
          <Avatar />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
