import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

import "../App.css";

import Header from "./Header";
import Footer from "./Footer";
import Cards from "./Cards/Cards";
import Charts from "./Charts/Charts";
import fetchCardsData from "./fetchFunctions/fetchCardsData";
import fetchChartsData from "./fetchFunctions/fetchChartsData";

const App = () => {
  // Latest Response state
  const [latest_Response, setLatestResponse] = useState({});
  // History response state
  const [history_Response, setHistoryResponse] = useState([]);
  // Selected States state
  const [selectedState, setSelectedState] = useState("");
  // State code and state name
  const [stateInfo, setStateInfo] = useState({
    stateCode: [],
    stateName: [],
    stateOptions: [],
  });
  // Cards data state
  const [cardsData, setCardsData] = useState({});
  // Charts data state
  const [chartsData, setChartsData] = useState({});
  // dummy dataset
  const [dummy, setDummy] = useState("");

  // Main API call for total and statewise data, and update states accordingly

  // eslint-disable-next-line
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
    // set initial State
    setSelectedState(latestResponse.data.statewise[0].statecode);
    setDummy("Dummy");
    // set all states information
    const stCode = [];
    const stName = [];
    const stOption = [];
    if (latest_Response.statewise !== undefined) {
      latest_Response.statewise.forEach((data) => {
        stOption.push({
          value: data.statecode,
          label: data.state,
        });
        stCode.push(data.statecode);
        stName.push(data.state);
      });
    }
    setStateInfo({
      stateCode: stCode,
      stateName: stName,
      stateOptions: stOption,
    });
  };

  // Useffect with selected state so that it is called when selected state is changed.
  const fetchComponentsData = () => {
    // get cards data and updated in Cards -state
    setCardsData(fetchCardsData(latest_Response, selectedState));

    // get charts data and update in Chatrs-state
    setChartsData(
      fetchChartsData(history_Response, latest_Response, selectedState)
    );
  };

  // eslint-disable-next-line
  useEffect(() => {
    fetchResources();
  }, [dummy]);

  useEffect(() => {
    fetchComponentsData();
  }, [selectedState]);

  const handleChange = (sl) => {
    setSelectedState(sl.value);
  };

  return (
    <div>
      <Header />
      <Cards data={cardsData} counting_data={chartsData} />
      <Select
        className="select"
        defaultValue={selectedState}
        onChange={handleChange}
        options={stateInfo.stateOptions}
      />
      <Charts data={chartsData} selectedState={selectedState} />

      <Footer />
    </div>
  );
};

export default App;
