import React, { useState, useEffect } from "react";
import axios from "axios";

import Cards from "./Cards/Cards";
// import MainChart from "./Charts/MainChart";
import fetchCardsData from "./fetchFunctions/fetchCardsData";
import fetchChartsData from "./fetchFunctions/fetchChartsData";

const App = () => {
  // Latest Response state
  const [latest_Response, setLatestResponse] = useState({});
  // History response state
  const [history_Response, setHistoryResponse] = useState([]);
  // Selected States state
  const [selectedState, setSelectedState] = useState("");
  // Cards data state
  const [cardsData, setCardsData] = useState({});
  // Charts data state
  const [chartsData, setChartsData] = useState({});

  // Main API call for total and statewise data, and update states accordingly
  const fetchResources = async () => {
    // Latest response needed for cards
    const latestResponse = await axios.get(
      "https://api.covid19india.org/data.json"
    );

    // history response needed for Charts
    const historyResponse = await axios.get(
      "https://api.covid19india.org/states_daily.json"
    );

    // set Latest Response
    setLatestResponse(latestResponse.data);
    // set History response state
    setHistoryResponse(historyResponse.data.states_daily);
    // set initial State
    setSelectedState(latestResponse.data.statewise[0].statecode);

    // get cards data and updated in Cards -state
    setCardsData(fetchCardsData(latest_Response, selectedState));

    // get charts data and update in Chatrs-state
    setChartsData(
      fetchChartsData(history_Response, latest_Response, selectedState)
    );
  };

  // Useffect with selected state so that it is called when selected state is changed.
  useEffect(() => {
    fetchResources();
  }, [selectedState]);

  return (
    <div>
      <Cards data={cardsData} />
    </div>
  );
};

export default App;
