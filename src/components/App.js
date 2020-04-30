import React from "react";
import axios from "axios";

import Cards from "./Cards/Cards";
import MainChart from "./Charts/MainChart";

class App extends React.Component {
  state = {
    latestData: {},
    historyData: [],
  };

  async componentDidMount() {
    const latest_response = await axios.get(
      "https://api.rootnet.in/covid19-in/stats/latest"
    );
    this.setState({ latestData: latest_response.data.data });
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center">COVID-19 | India Tracker</h3>
        <Cards summary={this.state.latestData.summary} />
        <MainChart />
      </div>
    );
  }
}

export default App;
