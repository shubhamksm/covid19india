const fetchCardsData = (initData, selectedState) => {
  if (initData.statewise === undefined) {
    // console.log(initData, selectedState);
    return {};
  } else {
    // If selected is Total(India)
    const data = initData.statewise.filter((data) => {
      return data.statecode === selectedState;
    });
    return data[0];
  }
};

export default fetchCardsData;
