import React, { Component } from "react";
import axios from "axios";
class Events extends Component {
  state = { events: [] };

  componentDidMount() {
    axios.get(`http://localhost:3000/events`, this.state.user).then((res) => {
      if (res.data) {
        const events = res.data;
        this.setState({ events });
      } else {
        console.log("user created with error");
      }
    });
    this.setState({ events: this.props.eventList });
  }
  render() {
    // console.log(this.props);
    return (
      <div className="container-fluid" style={{ padding: "5%" }}>
        <h1 className="display-4 mb-4">Upcoming Events</h1>
        <div
          className="row"
          style={{
            display: "flex",
            flex: 1,
            flexWrap: "nowrap",
            justifyContent: "space-around",
            overflow: "auto",
          }}
        >
          {!this.state.events.length ? (
            <h4>No Events to Display</h4>
          ) : (
            this.state.events.map((event) => (
              <div
                className="col-md-4   p-4 border shadow m-1"
                style={{ backgroundColor: "skyblue" }}
              >
                <h2 className="font-weight-light">{event.title}</h2>
                <p className="text-cnter">
                  <span className="font-weight-bold">Starts at :</span>
                  {event.startsAt}
                  <br></br>
                  <span className="font-weight-bold">Ends at :</span>
                  {event.endsAt}
                  <br></br>
                  <span className="font-weight-bold">Venue :</span>
                  {event.venue}
                </p>
              </div>
            ))
          )}
        </div>
        <a href="/events" className="btn btn-white m-4">
          View All
        </a>
      </div>
    );
  }
}

export default Events;
