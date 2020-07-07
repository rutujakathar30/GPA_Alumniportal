import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="border-top border-bottom bg-white " id="lead">
        <div className="container">
          <div className="row py-3">
            <div className="col mx-auto text-center">
              <p className="lead p-0 m-0">
                To spread the power Connecting
                <button
                  className="btn btn-primary badge-pill btn-sm px-3 m-3 btn-gray"
                  type="button"
                  data-toggle="modal"
                  data-target="#login-modal"
                >
                  <i className="far fa-clone mr-2"></i>Register
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
