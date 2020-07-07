import React, { Component } from "react";
import axios from "axios";
class Students extends Component {
  state = { students: [] };

  componentDidMount() {
    axios.get(`http://localhost:3000/users`, this.state.user).then((res) => {
      if (res.data) {
        const students = res.data;
        this.setState({ students });
      } else {
        console.log("user created with error");
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <h3 className="text-muted m-4">Student Directory</h3>
        <div className="row p-4" style={{ border: "1px solid skyblue" }}>
          {this.state.students.map((student) => (
            <React.Fragment>
              <div className="col-md-2"></div>
              <div
                className="col-md-8 p-4 m-4 shadow"
                style={{ backgroundColor: "skyblue" }}
              >
                <img
                  className="float-left m-4"
                  src="dummy-image.jpg"
                  width="300px"
                />
                <div className="m-4">
                  <p className="text-left">
                    <h5 className="d-inline-block mr-2">Name : </h5>
                    <span>
                      "{" "}
                      {student.first_name +
                        " " +
                        student.middle_name +
                        " " +
                        student.last_name}
                      "
                    </span>
                    <br></br>
                    <h5 className="d-inline-block mr-2">Branch : </h5>
                    <span>" {student.Branch}"</span>
                    <br></br>
                    <h5 className="d-inline-block mr-2">Email :</h5>
                    <span>" {student.email}"</span>
                    <br></br>
                    <h5 className="d-inline-block mr-2">Degree :</h5>
                    <span>" {student.degree}"</span>
                    <br></br>
                    <h5 className="d-inline-block mr-2">Year of Passing :</h5>
                    <span>" {student.year_of_passing}"</span>
                  </p>
                </div>
                {/* <p>{event.description}</p> */}
              </div>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Students;
