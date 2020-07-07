import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";
import Home from "./components/Home/home";
import Navbar from "./components/Navbar/navbar";
import Register from "./components/Register/Register";
import "./App.css";
import MyProfile from "./components/MyProfile/myprofile";
import Admin from "./components/Admin/admin.jsx";
import AllEvents from "./components/Events/allEvents";
import Footer from "./components/Footer/footer";
import Students from "./components/Students/Students";
import Contact from "./components/Contact/contact_us";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/students" component={Students} />
          <Route path="/login" component={Login} />
          <Route path="/events" component={AllEvents} />
          <Route path="/admin" component={Admin} />
          <Route path="/contact" component={Contact} />
          <Route path="/profile" component={MyProfile} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
