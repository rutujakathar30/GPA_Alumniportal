import React, { Component } from "react";

import axios from "axios";

class Login extends Component {
  state = {
    user: {},
    error: "",
  };

  handleTextChange = (event) => {
    if (event.currentTarget.name === "email")
      this.setState({
        user: { ...this.state.user, email: event.currentTarget.value },
      });
    else if (event.currentTarget.name === "password")
      this.setState({
        user: { ...this.state.user, password: event.currentTarget.value },
      });
  };

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
    if (
      this.state.email == "admin@gp.com" &&
      this.state.password == "admin123"
    ) {
      this.props.history.push("/admin/dashboard");
    } else this.setState({ error: "Invalid Username Or Password" });
  };
  render() {
    const loginFormStyle = {
      margin: " 100px auto",
      padding: 30,
      width: 400,
      height: 300,
      border: "1px solid orange",
    };
    return (
      <div style={loginFormStyle}>
        <h2>Login</h2>
        <br></br>
        <span class="text-danger">{this.state.error}</span>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <input
              class="form-control"
              name="email"
              placeholder="Email"
              Value={this.state.email}
              onChange={() => this.handleTextChange}
              required
            ></input>
          </div>
          <div class="form-group">
            <input
              type="Password"
              class="form-control"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={() => this.handleTextChange}
              required
            ></input>
          </div>
          <button class="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
