import React, { Component } from "react";
import axios from "axios";
class AllEvents extends Component {
  state = { events: [] };

  componentDidMount() {
    axios.get(`http://localhost:3000/events`).then((res) => {
      if (res.data) {
        const events = res.data;
        this.setState({ events });
      } else {
        console.log("user created with error");
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <h3 className="text-muted m-4">Upcoming Events</h3>
        <div className="row p-4">
          {this.state.events.map((event) => (
            <React.Fragment>
              <div className="col-md-2"></div>
              <div
                className="col-md-8   p-4 m-4 shadow"
                style={{ backgroundColor: "skyblue" }}
              >
                <img
                  className="float-left m-4"
                  src="dummy-image.jpg"
                  width="350px"
                />
                <div className="m-4">
                  <h4 className="">{event.title}</h4>
                  <p className="text-center">
                    <h5 className="d-inline-block mr-2">On : </h5>
                    <span>" {event.startsAt}"</span>
                    <br></br>

                    <h5 className="d-inline-block mr-2">Where :</h5>
                    <span>" {event.venue}"</span>
                  </p>
                </div>
                <p>{event.description}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default AllEvents;
