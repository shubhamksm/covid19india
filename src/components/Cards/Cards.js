import React from "react";
import "./Cards.css";

const Cards = (props) => {
  if (!props.cardsData) {
    return null;
  }

  return <div>Cards Component</div>;
};

export default Cards;
