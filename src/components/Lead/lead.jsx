import React, { Component } from "react";

class Lead extends Component {
  state = {};
  render() {
    return (
      <div className="bg-white" id="lead-text">
        <div
          className="container py-11 jarallax"
          style={{ backgroundColor: "skyblue" }}
        >
          <div className="row" data-aos="fade">
            <div className="col-lg-9 mx-auto text-center">
              <h5 className="display-4 m-3">Find Your Batchmates here</h5>
              <p className="lead mx-0 mx-lg-15 pb-4">
                Thinking of connecting with your lost Batchmates, Our Search
                tool will give you info about them, let see below if they are
                register with us.
              </p>
              <div className="mb-5">
                <form action="/students">
                  <div className="form-group">
                    { <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Batchmates Name here"
                    /> }
                  </div>
                  <button className="btn btn-secondary">
                    Go To Student Directory
                  </button>
                </form>
              </div>
              <p className="mt-2 mb-0 small text-muted text-center">
                <i className="fas fa-check-circle mr-2 text-primary"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lead;
