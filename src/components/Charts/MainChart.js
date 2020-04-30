import React from "react";
// import data from "./FakeData.json";
import { Line } from "react-chartjs-2";
import axios from "axios";

class MainChart extends React.Component {
  state = {
    data: {},
    options: {},
  };

  async componentDidMount() {
    const history_response = await axios.get(
      "https://api.rootnet.in/covid19-in/stats/history"
    );
    const Listdata = history_response.data.data;
    // Extract the data
    const dateData = Listdata.map((data) => {
      return data.day;
    });
    const totalData = Listdata.map((data) => {
      return data.summary.total;
    });
    const dischargedData = Listdata.map((data) => {
      return data.summary.discharged;
    });
    const deathsData = Listdata.map((data) => {
      return data.summary.deaths;
    });
    console.log(dateData, totalData);
    // this.setState({ labels: dateData, data: totalData });
    this.setState({
      data: {
        labels: dateData,
        datasets: [
          {
            label: "Confirmed Cases",
            data: totalData,
            backgroundColor: "rgba(255, 100, 100, 1)",
            borderColor: "rgba(255, 100, 100, 1)",
            // borderWidth: 5,
            fill: false,
          },
          {
            label: "Recovered",
            data: dischargedData,
            backgroundColor: "#03a9f4",
            borderColor: "#03a9f4",
            // borderWidth: 5,
            fill: false,
          },
          {
            label: "Deaths",
            data: deathsData,
            backgroundColor: "#607d8b",
            borderColor: "#607d8b",
            // borderWidth: 5,
            fill: false,
          },
        ],
      },
      options: {
        animation: {
          duration: 4000,
          easing: "easeInExpo",
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
              },
              ticks: {
                callback: function (dataLabel, index) {
                  // Hide the label of every 2nd dataset. return null to hide the grid line too
                  return index % 5 === 0 ? dataLabel : null;
                },
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    });
    // Extraction done
  }

  render() {
    return (
      <div className="main-chart">
        <h4>Chart</h4>
        <Line data={this.state.data} options={this.state.options} />
      </div>
    );
  }
}

export default MainChart;
