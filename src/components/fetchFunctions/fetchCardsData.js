const fetchCardsData = (initData, selectedState) => {
  if (initData.statewise === undefined) {
    // console.log(initData, selectedState);
    return {};
  } else {
    // If selected is Total(India)
    if (selectedState === "TT") {
      // console.log(initData, selectedState);
      const data = initData.statewise.filter((data) => {
        return data.statecode === "TT";
      });
      return data[0];
    }
  }
};

export default fetchCardsData;
