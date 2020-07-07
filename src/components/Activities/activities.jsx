import React, { Component } from "react";

class Activities extends Component {
  state = {};
  render() {
    return (
      <div className="pt-12 bg-light border-top border-bottom" id="features">
        <div className="container">
          <div className="row mb-6 text-center" data-aos="fade">
            <div className="col">
              <h4 className="display-4 m-4">Our Activities</h4>
            </div>
          </div>
          <div className="row py-2" data-aos="fade">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <h3 className="h5 mb-2 mr-4">Fund Raise</h3>
              <p className="text-muted mr-5">
                We Help Our Students Or Alumni with our personel Community Fund.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <h3 className="h5 mb-2">Job Fests</h3>
              <p className="text-muted mr-5">
                We are powered by our iconic alumni Designated on top most posts
                in the industry with help of them every year we oraganise Job
                fests for our members.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <h3 className="h5 mb-2 mr-5">Skill Development</h3>
              <p className="text-muted mr-5">
                We do care anout need of skilled emplyees, to update our members
                we often organize Webinars, Seminars and workshops.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <h3 className="h5 mb-2 mr-4">Social Work</h3>
              <p className="text-muted mr-5">
                Being a community of educated people we also understand our
                social responsibility, to serve socienty we organize various
                Awarness Programs, Blood Donation Camp, Cleaness Camp and many
                more as we can.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Activities;
