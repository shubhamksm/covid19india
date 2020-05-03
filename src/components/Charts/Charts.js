import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import fetchMainChartData from "../fetchFunctions/fetchMainChartData";

const Charts = ({ data }) => {
  const [mainChartData, setMainChartData] = useState({});
  const [secChartData, setSecChartData] = useState({});

  // Set state which will be used to render Graphs
  const setData = () => {
    if (data === null) {
      return null;
    }
    setMainChartData(fetchMainChartData(data.dates, data.total));
  };

  useEffect(() => {
    setData();
  }, [data]);

  if (!data) {
    return null;
  } else {
    return (
      <div>
        Chart Component
        <Line data={mainChartData.data} options={mainChartData.options} />
      </div>
    );
  }
};

export default Charts;
