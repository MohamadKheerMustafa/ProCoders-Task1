import React from "react";
import Add from "./Remineder-CRUD/Add/Add";
import "./Main.css";
import Card from "./Remineder-Card/Card";

const Main = () => {
  return (
    <div className="main-container">
      <h1 className="main-h1"> Reminders </h1>
      <p className="main-p"> add reminder to take at time </p>
      <div>
        <Add />
      </div>
      <div className="cards">
        <Card />
      </div>
    </div>
  );
};

export default Main;
