import fetchCardsData from "./fetchCardsData";

const fetchTodaysData = (chartsData, cardsData) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const tempDay = cardsData.lastupdatedtime.slice(0, 2);
  const tempMonth = cardsData.lastupdatedtime.slice(3, 5);
  chartsData.dates.push(`${tempDay} ${months[parseInt(tempMonth) - 1]}`);
  chartsData.total.push(cardsData.confirmed);
  chartsData.active.push(cardsData.active);
  chartsData.recovered.push(cardsData.recovered);
  chartsData.deaths.push(cardsData.deaths);
  return chartsData;
};

const fetchChartsData = (historyData, latestData, selectedState) => {
  if (historyData[0] === undefined) {
    return {};
  } else {
    const chartsData = {
      dates: [],
      total: [],
      active: [],
      recovered: [],
      deaths: [],
    };
    const cardsData = fetchCardsData(latestData, selectedState);
    // Logic for Total scenario
    if (selectedState === "TT") {
      latestData.cases_time_series.forEach((data) => {
        chartsData.dates.push(data.date);
        chartsData.total.push(data.totalconfirmed);
        chartsData.active.push(
          data.totalconfirmed - data.totaldeceased - data.totalrecovered
        );
        chartsData.recovered.push(data.totalrecovered);
        chartsData.deaths.push(data.totaldeceased);
      });
      // console.log(dates, total, active, recovered, deaths);

      return fetchTodaysData(chartsData, cardsData);
    } else {
      const tempStateData = {
        confirmed: [],
        recovered: [],
        deaths: [],
        dates: [],
      };
      historyData.forEach((data) => {
        if (data.status === "Confirmed") {
          if (data[selectedState.toLowerCase()]) {
            tempStateData.confirmed.push(
              parseInt(data[selectedState.toLowerCase()])
            );
            tempStateData.dates.push(data["date"]);
          }
        } else if (data.status === "Recovered") {
          if (data[selectedState.toLowerCase()]) {
            tempStateData.recovered.push(
              parseInt(data[selectedState.toLowerCase()])
            );
          }
        } else if (data.status === "Deceased") {
          if (data[selectedState.toLowerCase()]) {
            tempStateData.deaths.push(
              parseInt(data[selectedState.toLowerCase()])
            );
          }
        }
      });
      tempStateData.confirmed.map((data, index, dataArray) => {
        let temp = 0;
        let i = 0;
        while (i <= index) {
          temp = temp + dataArray[i];
          i = i + 1;
        }
        chartsData.total.push(temp);
        chartsData.active.push(temp);
      });
      tempStateData.recovered.map((data, index, dataArray) => {
        let temp = 0;
        let i = 0;
        while (i <= index) {
          temp = temp + dataArray[i];
          i = i + 1;
        }
        chartsData.recovered.push(temp);
      });
      tempStateData.deaths.map((data, index, dataArray) => {
        let temp = 0;
        let i = 0;
        while (i <= index) {
          temp = temp + dataArray[i];
          i = i + 1;
        }
        chartsData.deaths.push(temp);
      });
      chartsData.dates = tempStateData.dates;
      return fetchTodaysData(chartsData, cardsData);
    }
  }
};

export default fetchChartsData;
