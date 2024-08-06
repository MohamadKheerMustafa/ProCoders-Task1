import React from "react";
import "./Card.css";

const Card = () => {
  const data = [
    {
      title: "First One",
      descreption: "This is first card",
    },
    {
      title: "Second One",
      descreption: "This is second card",
    },
    {
      title: "Third One",
      descreption: "This is third card",
    },
    {
      title: "4th One",
      descreption: "This is 4th card",
    },
    {
      title: "5th One",
      descreption: "This is 5th card",
    },
    {
      title: "6th One",
      descreption: "This is 6th card",
    },
    {
      title: "7th One",
      descreption: "This is 7th card",
    },
  ];

  return (
    <div className="cards-grid">
      {data.map((item, index) => (
        <div key={index} className="card">
          Title : <span className="span"> {item.title} </span> <br />
          Description : <span className="span"> {item.descreption} </span>
        </div>
      ))}
    </div>
  );
};

export default Card;
