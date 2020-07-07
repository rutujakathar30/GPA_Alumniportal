import React, { Component } from "react";
import axios from "axios";
class AllEvents extends Component {
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
  }

  render() {
    return (
      <React.Fragment>
        <h1 class="display-4">Upcoming Events</h1>
        <div class="row p-4">
          {this.state.events.map((event) => (
            <React.Fragment>
              <div
                class="col-md-10 offset-md-1 p-4 m-4 shadow"
                style={{ backgroundColor: "skyblue" }}
              >
                <img
                  class="float-right m-4 border"
                  src="dummy-image.jpg"
                  width="350px"
                  alt="Event Image"
                />
                <div class="m-4">
                  <h1 className="text-left">{event.title}</h1>
                  <p class="text-left">
                    <h5 className="d-inline-block mr-2">On : </h5>
                    <sapn>" {event.date}"</sapn>

                    <br></br>
                    <h5 className="d-inline-block mr-2">Where :</h5>
                    <sapn>" {event.venue}"</sapn>
                  </p>
                </div>
                <p>{event.description}</p>
                <button class="btn btn-primary">update this event</button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default AllEvents;
