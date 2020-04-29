import React from "react";
import "./Cards.css";

const Cards = (props) => {
  if (!props.summary) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col s12 m5 l2 card hoverable red lighten-4 red-text text-darken-4">
          <div className="card-content">
            <h5>Confirmed</h5>
            <span>
              <i className="fa fa-virus fa-3x"></i>
              <h6>{props.summary.total}</h6>
            </span>
          </div>
        </div>
        <div className="col s12 m5 l2 card hoverable blue lighten-4 blue-text text-darken-4">
          <div className="card-content">
            <h5>Active</h5>
            <span>
              <i className="fa fa-hospital-user fa-3x"></i>
              <h6>
                {props.summary.total -
                  props.summary.discharged -
                  props.summary.deaths}
              </h6>
            </span>
          </div>
        </div>
        <div className="col s12 m5 l2 card hoverable green lighten-4 green-text text-darken-4">
          <div className="card-content">
            <h5>Recovered</h5>
            <span>
              <i className="fa fa-shield-virus fa-3x"></i>
              <h6>{props.summary.discharged}</h6>
            </span>
          </div>
        </div>
        <div className="col s12 m5 l2 card hoverable grey lighten-4 grey-text text-darken-4">
          <div className="card-content">
            <h5>Deaths</h5>
            <span>
              <i className="fa fa-skull-crossbones fa-3x"></i>
              <h6>{props.summary.deaths}</h6>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cards;
