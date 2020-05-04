import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import axios from "axios";

import theme from "./ui/Theme";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Header from "./Header";
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
  // Cards data state
  const [cardsData, setCardsData] = useState({});
  // Charts data state
  const [chartsData, setChartsData] = useState({});

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
    setSelectedState(latestResponse.data.statewise[0].statecode);

    // get cards data and updated in Cards -state
    setCardsData(fetchCardsData(latest_Response, selectedState));

    // get charts data and update in Chatrs-state
    setChartsData(
      fetchChartsData(history_Response, latest_Response, selectedState)
    );
  };

  // Useffect with selected state so that it is called when selected state is changed.

  // eslint-disable-next-line
  useEffect(() => {
    fetchResources();
  }, [selectedState]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} xs={12}>
              <Cards data={cardsData} />
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <Charts data={chartsData} />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
