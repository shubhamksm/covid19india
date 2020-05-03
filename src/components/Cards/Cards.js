import React from "react";
import "./Cards.css";

const Cards = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <div>
      Confirmed - {data.confirmed}
      Active - {data.active}
      Recovered - {data.recovered}
      Deaths - {data.deaths}
      Last Updated - {data.lastupdatedtime}
    </div>
  );
};

export default Cards;
