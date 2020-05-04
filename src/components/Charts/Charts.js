import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import fetchMainChartData from "../fetchFunctions/fetchMainChartData";
import fetchSecChartData from "../fetchFunctions/fetchSecChartData";

const Charts = (props) => {
  const [mainChartData, setMainChartData] = useState({
    data: {},
    options: {},
  });
  const [secChartData, setSecChartData] = useState({
    data: {},
    options: {},
  });

  // Set state which will be used to render Graphs
  const setData = () => {
    if (props.data === null) {
      return null;
    }
    setMainChartData(fetchMainChartData(props.data.dates, props.data.total));
    setSecChartData(
      fetchSecChartData(
        props.data.dates,
        props.data.active,
        props.data.recovered,
        props.data.deaths
      )
    );
  };

  useEffect(() => {
    setData();
  }, [props.data]);

  if (!props.data) {
    return null;
  }

  return (
    <div>
      <Line data={mainChartData.data} options={mainChartData.options} />
      <Line data={secChartData.data} options={secChartData.options} />
    </div>
  );
};

export default Charts;
