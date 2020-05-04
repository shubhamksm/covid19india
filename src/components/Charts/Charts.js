import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import fetchMainChartData from "../fetchFunctions/fetchMainChartData";
import fetchSecChartData from "../fetchFunctions/fetchSecChartData";

const Charts = ({ data }) => {
  const [mainChartData, setMainChartData] = useState({});
  const [secChartData, setSecChartData] = useState({});

  // Set state which will be used to render Graphs
  const setData = () => {
    if (data === null) {
      return null;
    }
    setMainChartData(fetchMainChartData(data.dates, data.total));
    setSecChartData(
      fetchSecChartData(data.dates, data.active, data.recovered, data.deaths)
    );
  };

  useEffect(() => {
    setData();
  }, [data]);

  if (!data) {
    return null;
  } else {
    return (
      <div>
        <Line data={mainChartData.data} options={mainChartData.options} />
        <Line data={secChartData.data} options={secChartData.options} />
      </div>
    );
  }
};

export default Charts;
