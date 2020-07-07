import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import Alumni from "./alumni";
import Events from "./Events";
import "./admin.css";
import Dashboard from "./dashboard";
import CreateEvent from "./createEvent";
import Login from "./Login";

class Admin extends Component {
  state = { alumni: [], events: [] };
  componentDidMount() {
    axios.get(`http://localhost:3000/users`, this.state.user).then((res) => {
      if (res.data) {
        const alumni = res.data;
        this.setState({ alumni });
      } else {
        console.log(" error");
      }
    });

    axios.get(`http://localhost:3000/events`, this.state.user).then((res) => {
      if (res.data) {
        const events = res.data;
        this.setState({ events });
      } else {
        console.log(" error");
      }
    });
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div class="d-flex" id="wrapper">
            <div class="bg-light border-right" id="sidebar-wrapper">
              <div class="sidebar-heading">Admin Panel </div>
              <div class="list-group list-group-flush">
                <a
                  href="/admin"
                  class="list-group-item list-group-item-action bg-light"
                >
                  Dashboard
                </a>
                <a
                  href="/admin/alumni"
                  class="list-group-item list-group-item-action bg-light"
                >
                  Alumni
                </a>
                <a
                  href="/admin/events"
                  class="list-group-item list-group-item-action bg-light"
                >
                  Events
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action bg-light"
                >
                  Gallary
                </a>
                <a
                  href="/admin/event/create"
                  class="list-group-item list-group-item-action bg-light"
                >
                  Create Event
                </a>
                <a
                  href="/admin/photo/upload"
                  class="list-group-item list-group-item-action bg-light"
                >
                  Upload Photos
                </a>
              </div>
            </div>

            <div id="page-content-wrapper">
              <div class="container-fluid p-4">
                <Route path="/admin/alumni" component={() => <Alumni />} />
                <Route path="/admin/events" component={Events} />
                <Route
                  path="/admin/event/create"
                  exact
                  component={CreateEvent}
                />
                <Route
                  path="/admin/dashboard"
                  exact
                  component={() => (
                    <Dashboard
                      alumnicount={this.state.alumni.length}
                      eventcount={this.state.events.length}
                    />
                  )}
                />

                {/* <Route path="/" component={Home} /> */}
              </div>
            </div>
          </div>
          <Route path="/admin" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Admin;
