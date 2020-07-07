import React, { Component } from "react";

import axios from "axios";

class Login extends Component {
  state = {
    error: null,
  };

  handleTextChange = (event) => {
    if (event.target.name === "email")
      this.setState({
        user: { ...this.state.user, email: event.target.value },
      });
    else if (event.target.name === "password")
      this.setState({
        user: { ...this.state.user, password: event.target.value },
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/users/login", this.state.user)
      .then((res) => {
        if (res) {
          localStorage.setItem("user", JSON.stringify(res.data[0]));
          this.props.history.push("/");
        } else this.setState({ error: "invalid Credentials......" });
      });
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
              onChange={this.handleTextChange}
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
              onChange={this.handleTextChange}
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
