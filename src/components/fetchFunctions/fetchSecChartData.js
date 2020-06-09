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
          backgroundColor: "#cfd8dc",
          borderColor: "#263238",
          pointBackgroundColor: "#263238",
          borderWidth: 1,
          pointRadius: 2,
          // borderWidth: 5,
          // fill: false,
        },
        {
          label: "Recovered",
          data: recovered,
          backgroundColor: "#c8e6c9",
          borderColor: "#1b5e20",
          pointBackgroundColor: "#1b5e20",
          borderWidth: 1,
          pointRadius: 2,
          // borderWidth: 5,
          // fill: false,
        },
        {
          label: "Active Cases",
          data: active,
          backgroundColor: "#ffcdd2",
          pointBackgroundColor: "rgba(255, 100, 100, 1)",
          borderColor: "rgba(255, 100, 100, 1)",
          borderWidth: 1,
          pointRadius: 2,
          // borderColor: "rgba(255, 100, 100, 1)",
          // borderWidth: 5,
          // fill: false,
        },
      ],
    };
    mainData.options = {
      legend: {
        labels: {
          fontFamily: "Poppins",
        },
      },
      tooltips: {
        mode: "index",
        position: "nearest",
        intersect: false,
        backgroundColor: "#ffcdd2",
        borderColor: "#b71c1c",
        borderWidth: 1,
        titleFontFamily: "Poppins",
        titleFontColor: "#b71c1c",
        bodyFontFamily: "Poppins",
        bodyFontColor: "#000000",
        titleFontSize: 16,
        bodyFontSize: 14,
      },
      hover: {
        mode: "index",
      },
      animation: {
        duration: 3000,
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
                return index % 3 === 0 ? dataLabel : null;
              },
              maxRotation: 0,
              minRotation: 0,
            },
          },
        ],
        yAxes: [
          {
            stacked: true,
            gridLines: {
              display: false,
            },
            ticks: {
              callback: function (dataLabel, index) {
                // Hide the label of every 2nd dataset. return null to hide the grid line too
                return index % 3 === 0 ? dataLabel : null;
              },
            },
          },
        ],
      },
    };
    return mainData;
  }
};

export default fetchSecChartData;
