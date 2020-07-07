import React, { Component } from "react";
import Navbar from "../Navbar/navbar";
import Hero from "../Hero/hero";
import Lead from "../Lead/lead";
import Footer from "../Footer/footer";
import Activites from "../Activities/activities";
import Events from "../Events/events";
import Register from "../Register/Register";

import Contact from "../Contact/contact_us";

class Home extends Component {
  state = {
    events: [
      {
        title: "Alumni Meet 2020",
        startsAt: "20 march, 2020",
        endsAt: "20 march, 2020",
        venue: "Aurangabad",
      },
      {
        title: "Alumni Meet 2020",
        startsAt: "20 march, 2020",
        endsAt: "20 march, 2020",
        venue: "Aurangabad",
      },
      {
        title: "Alumni Meet 2020",
        startsAt: "20 march, 2020",
        endsAt: "20 march, 2020",
        venue: "Aurangabad",
      },
      {
        title: "Alumni Meet 2020",
        startsAt: "20 march, 2020",
        endsAt: "20 march, 2020",
        venue: "Aurangabad",
      },
      {
        title: "Alumni Meet 2020",
        startsAt: "20 march, 2020",
        endsAt: "20 march, 2020",
        venue: "Aurangabad",
      },
    ],

    photos: [],
  };
  render() {
    return (
      <React.Fragment>
        <Hero />
        <Lead />
        <Events eventList={this.state.events} />
        <Activites />
        <Contact />
      </React.Fragment>
    );
  }
}

export default Home;
