import React from "react";
import CountUp from "react-countup";

import first_graphic from "../../images/first_graphic.svg";
import second_graphic from "../../images/second_graphic.svg";

const Cards = ({ data }) => {
  if (!data) {
    return null;
  }

  const localData = {
    confirmed: 0,
    active: 0,
    recovered: 0,
    deaths: 0,
    deltaconfirmed: 0,
    deltarecovered: 0,
    deltadeaths: 0,
  };

  if (data.confirmed !== undefined) {
    localData.confirmed = parseInt(data.confirmed);
    localData.active = parseInt(data.active);
    localData.recovered = parseInt(data.recovered);
    localData.deaths = parseInt(data.deaths);
    localData.deltaconfirmed = parseInt(data.deltaconfirmed);
    localData.deltarecovered = parseInt(data.deltarecovered);
    localData.deltadeaths = parseInt(data.deltadeaths);
  }

  return (
    <React.Fragment>
      <section className="main-section">
        <div className="info">
          <div className="main-info">
            <h4 className="regular">Confirmed</h4>
            <CountUp
              className="medium main-count"
              start={0}
              end={localData.confirmed}
              duration={1.5}
            />
            <p>
              Today +
              <CountUp
                className="medium today-count"
                start={0}
                end={localData.deltaconfirmed}
                duration={2.75}
              />
            </p>
          </div>
          <div className="avg-daily">
            <p>Avg. Daily cases</p>
            <h4 className="medium">8475</h4>
            <span>* Based on last 7 entries</span>
          </div>
          <div className="last-3-days">
            <p>Last 3 Days</p>
            <p className="medium">+9425 / +9175 / +9856</p>
          </div>
        </div>
        <div className="graphic">
          <img src={first_graphic} alt="first_graphic" />
        </div>
      </section>
      <section className="sec-section">
        <div className="graphic">
          <img src={second_graphic} alt="second_graphic" />
        </div>
        <div className="info">
          <div className="active">
            <h4 className="regular main">Active</h4>
            <div className="active-data">
              <CountUp
                className="medium main main-count"
                start={0}
                end={localData.active}
                duration={1.5}
              />
              <h3 className="medium">/</h3>
              <h4 className="medium sec">52.56%</h4>
            </div>
          </div>
          <div className="recovered">
            <h4 className="regular main">Recovered</h4>
            <div className="recovered-data">
              <CountUp
                className="medium main main-count"
                start={0}
                end={localData.recovered}
                duration={1.5}
              />
              <h3 className="medium">/</h3>
              <h4 className="medium sec">52.44%</h4>
            </div>
          </div>
          <div className="deaths">
            <h4 className="regular main">Deaths</h4>
            <div className="deaths-data">
              <CountUp
                className="medium main main-count"
                start={0}
                end={localData.deaths}
                duration={1.5}
              />
              <h3 className="medium">/</h3>
              <h4 className="medium sec">3.04%</h4>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Cards;
