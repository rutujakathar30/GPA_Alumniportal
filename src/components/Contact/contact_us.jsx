import React, { Component } from "react";

class Gallary extends Component {
  state = { photos: [] };
  componentDidMount() {
    this.setState({ photos: this.props.photoList });
  }
  render() {
    // console.log(this.props);
    return (
      <div
        className="container-fluid"
        style={{ padding: "5%", backgroundColor: "skyblue" }}
      >
        <h1 className="display-4 m-4">Contact</h1>
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
          <div className="col-md-4 p-4">
            <p className="text-secondary" style={{ fontSize: "20px" }}>
              <b>
                Government Polytechnic, Osmanpura, Aurangabad – 431005,
                Maharashtra State, India
              </b>
            </p>
            <p className="text-secondary" style={{ fontSize: "20px" }}>
              <b className="text-center">
                +91-240- 2353644 <br></br>
                (Principal) +91-240-2334724<br></br>
                principal.gpaurangabad@dtemaharashtra.gov.in
              </b>
            </p>
          </div>
          <div className="col-md-5 bg-light p-4 rounded shadow">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Topic"
                />
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Message"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Special Intruction/Suggesions"
                />
              </div>
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallary;
