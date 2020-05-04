import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import axios from "axios";

import theme from "./ui/Theme";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Cards from "./Cards/Cards";
import Charts from "./Charts/Charts";
import fetchCardsData from "./fetchFunctions/fetchCardsData";
import fetchChartsData from "./fetchFunctions/fetchChartsData";
import {
  Box,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  selectBox: {
    // textAlign: "center",
  },
  form: {
    paddingBottom: "1rem",
    marginLeft: "2rem",
    minWidth: "25%",
  },
}));

const App = () => {
  const classes = useStyles();
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
    if (latest_Response.statewise !== undefined) {
      latest_Response.statewise.forEach((data) => {
        stCode.push(data.statecode);
        stName.push(data.state);
      });
    }
    setStateInfo({ stateCode: stCode, stateName: stName });
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

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectedState(event.target.value);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Container>
          <Box className={classes.selectBox}>
            <FormControl className={classes.form}>
              <InputLabel id="select-state">Select State</InputLabel>
              <Select
                labelId="select-state"
                id="select-state"
                value={selectedState}
                onChange={handleChange}
              >
                {stateInfo.stateCode.map((data, index) => {
                  return (
                    <MenuItem value={data} key={data}>
                      {stateInfo.stateName[index]}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
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
