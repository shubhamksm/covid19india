const fetchDailyCardsData = (counting_data) => {
  if (counting_data.total === undefined) {
    // console.log(initData, selectedState);
    return {
      avg_day: 0,
      three_day: [0, 0, 0],
    };
  } else {
    const three_day = [];
    const seven_day = [];
    for (let i = 2; i < 9; i++) {
      if (i < 5) {
        three_day.push(
          counting_data.total[counting_data.total.length - i] -
            counting_data.total[counting_data.total.length - i - 1]
        );
      }
      seven_day.push(
        counting_data.total[counting_data.total.length - i] -
          counting_data.total[counting_data.total.length - i - 1]
      );
    }
    let avg_sum = 0;
    seven_day.forEach((day) => {
      avg_sum += day;
    });
    let avg = parseInt(avg_sum / 7);

    return {
      three_day: three_day,
      avg_day: avg,
    };
  }
};

export default fetchDailyCardsData;
