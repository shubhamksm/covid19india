import React from "react";
import axios from "axios";

import Cards from "./Cards";

class App extends React.Component {
  state = {
    latestData: {},
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://api.rootnet.in/covid19-in/stats/latest"
    );
    this.setState({ latestData: response.data.data });
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center">COVID-19 | India Tracker</h3>
        <Cards summary={this.state.latestData.summary} />
      </div>
    );
  }
}

export default App;
