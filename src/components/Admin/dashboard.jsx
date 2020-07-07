import React, { Component } from "react";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div
          className="col-lg-3 shadow m-4"
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "skyblue",
            width: "200px",
            height: "200px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4>Alumni</h4>
          <h1 className="display-4">{this.props.alumnicount}</h1>
        </div>

        <div
          className="col-lg-3 shadow m-4"
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "skyblue",
            width: "200px",
            height: "200px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4>Events</h4>
          <h1 className="display-4">{this.props.eventcount}</h1>
        </div>

        <div
          className="col-lg-3 shadow m-4"
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "skyblue",
            width: "200px",
            height: "200px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4>Photos</h4>
          <h1 className="display-4">1000</h1>
        </div>
      </div>
    );
  }
}

export default Dashboard;
