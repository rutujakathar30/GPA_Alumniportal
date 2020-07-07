import React, { Component, CalendarIcon } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

class CreateEvent extends Component {
  state = { event: {} };
  handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/events", this.state.event).then((res) => {
      if (res) this.props.history.push("/admin/events");
    });
  };

  handleTextChange = (e) => {
    const event = { ...this.state.event };
    event[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ event });
    // console.log(this.state.user);
  };
  render() {
    return (
      <div class="row">
        <div class="col-md-6 offset-md-3 shadow p-4 border">
          <h2 className="mb-4">Create Events Form</h2>
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <input
                name="title"
                type="text"
                className="form-control"
                placeholder="Title"
                onChange={this.handleTextChange}
              />
            </div>
            <div className="form-group">
              <input
                name="description"
                type="text"
                className="form-control"
                placeholder="Description"
                onChange={this.handleTextChange}
              />
            </div>
            {/* <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Date : In format 'DD/MM/YYYY'"
              />
            </div> */}
            <div className="form-group">
              <input
                name="date"
                type="text"
                className="form-control"
                placeholder="Date :DD-MM-YYYY"
                onChange={this.handleTextChange}
              />
            </div>
            <div className="form-group">
              <input
                name="time"
                type="text"
                className="form-control"
                placeholder="Time : e.g. 04:00 pm"
                onChange={this.handleTextChange}
              />
            </div>

            <div className="form-group">
              <input
                name="venue"
                type="text"
                className="form-control"
                placeholder="Venue"
                onChange={this.handleTextChange}
              />
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateEvent;
