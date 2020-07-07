import React, { Component } from "react";
import axios from "axios";
import "./registrationForm.css";
class Register extends Component {
  state = {
    user: {},
  };

  handleTextChange = (event) => {
    const user = { ...this.state.user };
    user[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ user });
    console.log(this.state.user);
  };

  onSubmitHandle = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3000/users", this.state.user).then((res) => {
      if (res.data) {
        localStorage.setItem("user", res.data.insertId);
        this.props.history.push("/");
      } else {
        console.log("user created with error");
      }
    });
  };
  render() {
    const registerFormStyle = {
      // margin: " 100px 100px",

      padding: 50,
      width: "100%",
    };

    return (
      <div style={registerFormStyle}>
        <h2 style={{ marginTop: "50px" }}>Registration</h2>
        <br></br>
        <div
          style={{
            border: "2px solid skyblue",
            borderRadius: 10,
            padding: 50,
          }}
        >
          <form onSubmit={this.onSubmitHandle}>
            <h6 className="text-left text-muted">Basic Info*:</h6>
            <br></br>
            <div className="form-group form-grid-3">
              <input
                name="first_name"
                className="form-control"
                placeholder="First Name"
                value={this.state.user.first_name}
                onChange={this.handleTextChange}
                required
              ></input>
              <input
                name="middle_name"
                className="form-control"
                placeholder="Middle Name"
                value={this.state.user.middle_name}
                onChange={this.handleTextChange}
                required
              ></input>
              <input
                name="last_name"
                className="form-control"
                placeholder="Last Name"
                value={this.state.user.last_name}
                onChange={this.handleTextChange}
                required
              ></input>
            </div>
            <div className="form-group form-grid-3">
              <select
                className="form-control"
                name="gender"
                onChange={this.handleTextChange}
                value={this.state.user.gender}
                required
              >
                <option value="">--Select Gender--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input
                name="address1"
                className="form-control"
                placeholder="Address Line 1"
                value={this.state.user.address1}
                onChange={this.handleTextChange}
                required
              ></input>
              <input
                name="address2"
                className="form-control"
                placeholder="Address Line 2"
                value={this.state.user.address2}
                onChange={this.handleTextChange}
              ></input>
            </div>
            <div className="form-group form-grid-3">
              <select
                className="form-control"
                name="city"
                onChange={this.handleTextChange}
                value={this.state.user.city}
                required
              >
                <option value="">--Select City--</option>
                <option value="Aurangabad">Aurangabad</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Lakhnow">Lakhnow</option>
                <option value="Pune">Pune</option>
                <option value="Nagpur">Nagpur</option>
              </select>
              <select
                className="form-control"
                name="state"
                onChange={this.handleTextChange}
                value={this.state.user.state}
                required
              >
                <option value="">--Select Sate--</option>
                <option value="Maharastra">Maharastra</option>
                <option value="Telangana">Telangana</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Delhi">Delhi</option>
                <option value="Rajasthan">Rajasthan</option>
              </select>
              <select
                className="form-control"
                name="country"
                onChange={this.handleTextChange}
                value={this.state.user.country}
                required
              >
                <option value="">--Select Country--</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UAE">UAE</option>
                <option value="Finland">Finland</option>
                <option value="New Zeeland">New Zeeland</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
            <h6 className="text-left text-muted">Login Info*:</h6>
            <br></br>
            <div className="form-group form-grid-3">
              <input
                name="email"
                className="form-control"
                placeholder="Email"
                onBlur={this.handleTextChange}
              ></input>
              <input
                id="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={this.state.user.password}
                onBlur={this.handleTextChange}
              ></input>
              <input
                name="password2"
                className="form-control"
                placeholder="Confirm Password"
              ></input>
            </div>
            <h6 className="text-left text-muted">Educational Details*:</h6>
            <br></br>
            <div className="form-group form-grid-3">
              <select
                className="form-control"
                name="degree"
                onChange={this.handleTextChange}
                value={this.state.user.degree}
                required
              >
                <option value="">-- select degree --</option>
                <option value="Diploma">Diploma</option>
                <option value="B.E">B.E</option>
                <option value="B.Tech">B.Tech</option>
                <option value="M.E">M.E</option>
                <option value="M.Tech">M.Tech</option>
              </select>
              <select
                className="form-control"
                name="branch"
                onChange={this.handleTextChange}
                value={this.state.user.branch}
                required
              >
                <option value="">-- select Branch --</option>
                <option value="CSE">Computer</option>
                <option value="MECH">Mechanical</option>
                <option value="ELECTRICAL">Electrical</option>
                <option value="CIVIL">Civil</option>
                <option value="IT">IT</option>
              </select>
              <select
                className="form-control"
                name="year_of_passing"
                onChange={this.handleTextChange}
                value={this.state.user.year_of_passing}
                required
              >
                <option value="">-- select Year of Passing --</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
              </select>
            </div>

            <div className="form-group"></div>

            <button className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
