import React from "react";
import "../Add/Add.css";
import Input from "../../../Shared/Input/Input";
import Button from "../../../Shared/Button/Button";

const Add = () => {

  return (
    <div className="main-container">
      <div className="inputs">
        <Input type="text" name="title" placeholder="Title" />
        <Input type="date" name="day-select" placeholder="Day Select" />
        <Input type="text" name="time" placeholder="Time / hour" />
        <Button title="Add" />
      </div>
    </div>
  );
};

export default Add;
