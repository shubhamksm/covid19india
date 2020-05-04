const fetchMainChartData = (dates, total) => {
  const mainData = {
    data: {},
    options: {},
  };
  if (dates === undefined) {
    return mainData;
  } else {
    mainData.data = {
      labels: dates,
      datasets: [
        {
          label: "Total Confirmed Cases",
          data: total,
          backgroundColor: "rgba(255, 100, 100, 1)",
          borderColor: "rgba(255, 100, 100, 1)",
          // borderWidth: 5,
          fill: false,
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
                return index % 2 === 0 ? dataLabel : null;
              },
              maxRotation: 0,
              minRotation: 0,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              callback: function (dataLabel, index) {
                // Hide the label of every 2nd dataset. return null to hide the grid line too
                return index % 2 === 0 ? dataLabel : null;
              },
            },
          },
        ],
      },
    };
    console.log(mainData);
    return mainData;
  }
};

export default fetchMainChartData;
