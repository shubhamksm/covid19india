import fetchCardsData from "./fetchCardsData";

const fetchChartsData = (historyData, latestData, selectedState) => {
  // Global variable
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
  if (historyData[0] === undefined) {
    return null;
  } else {
    // Logic for Total scenario
    if (selectedState === "TT") {
      const cardsData = fetchCardsData(latestData, selectedState);
      const chartsData = {
        dates: [],
        total: [],
        active: [],
        recovered: [],
        deaths: [],
      };
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
      const tempDay = cardsData.lastupdatedtime.slice(0, 2);
      const tempMonth = cardsData.lastupdatedtime.slice(3, 5);
      chartsData.dates.push(`${tempDay} ${months[parseInt(tempMonth) - 1]}`);
      chartsData.total.push(cardsData.confirmed);
      chartsData.active.push(cardsData.active);
      chartsData.recovered.push(cardsData.recovered);
      chartsData.deaths.push(cardsData.deaths);
      return chartsData;
    }
  }
};

export default fetchChartsData;
