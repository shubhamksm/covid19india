import React, { useState, useEffect } from "react";
import axios from "axios";

import Cards from "./Cards/Cards";
// import MainChart from "./Charts/MainChart";
import fetchCardsData from "./fetchFunctions/fetchCardsData";

const App = () => {
  // Initial Response state
  const [initialResponse, setInitialResponse] = useState({});
  // Selected States state
  const [selectedState, setSelectedState] = useState("TT");
  // Cards data state
  const [cardsData, setCardsData] = useState({});

  const fetchResources = async () => {
    const response = await axios.get("https://api.covid19india.org/data.json");

    // set Initial Response
    setInitialResponse(response.data);
    // get cards data updated in state
    setCardsData(fetchCardsData(initialResponse, selectedState));
  };

  useEffect(() => {
    fetchResources();
  }, [initialResponse]);

  return (
    <div>
      <Cards data={cardsData} />
    </div>
  );
};

export default App;
