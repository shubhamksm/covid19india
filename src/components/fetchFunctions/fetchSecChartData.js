const fetchSecChartData = (dates, active, recovered, deaths) => {
  const mainData = {
    data: {},
    options: {},
  };
  if (dates === undefined) {
    return mainData;
  } else {
    // Main logic --
    mainData.data = {
      labels: dates,
      datasets: [
        {
          label: "Deaths",
          data: deaths,
          backgroundColor: "#607d8b",
          borderColor: "#607d8b",
          // borderWidth: 5,
          // fill: false,
        },
        {
          label: "Recovered",
          data: recovered,
          backgroundColor: "#03a9f4",
          borderColor: "#03a9f4",
          // borderWidth: 5,
          // fill: false,
        },
        {
          label: "Active Cases",
          data: active,
          backgroundColor: "rgba(255, 100, 100, 1)",
          borderColor: "rgba(255, 100, 100, 1)",
          // borderWidth: 5,
          // fill: false,
        },
      ],
    };
    mainData.options = {
      tooltips: {
        mode: "index",
        position: "nearest",
        intersect: false,
      },
      hover: {
        mode: "index",
      },
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
            stacked: true,
            gridLines: {
              display: false,
            },
          },
        ],
      },
    };
    return mainData;
  }
};

export default fetchSecChartData;
