import React, { Component } from "react";

class Hero extends Component {
  state = {};
  render() {
    return (
      <div className="overflow-hidden " style={{ backgroundColor: "" }} id="hero">
        <div
          className="container d-flex flex-column jarallax"
          style={{
            minHeight: "46rem",
            background: "url('/images/bg/bg_10.svg') center center no-repeat",
          }}
        >
          <div className="row my-auto">
            <div className="col-lg-5 my-auto pt-16 pb-6 pt-lg-8 pb-lg-0 mr-auto">
              <div className="mb-3 d-flex align-items-center">
                <div className="icon icon-sm bg-gray rounded text-muted mr-2">
                  <i className="fas fa-clock"></i>
                </div>
              </div>
              <h1 className="display-4 mb-2">
                Alumni Association of Government Polytechnic Aurangabad
              </h1>
              <p className="lead mb-5">
                We are community of more than 5000 alumni and students of
                Government Polytechnic College,Aurangabad
              </p>
              <div className="mb-5">
                <a
                  className="btn rounded-pill btn-primary px-4 mr-3"
                  href="/register"
                >
                  Join Us
                </a>
                <a
                  className="btn rounded-pill btn-secondary px-4 mr-3"
                  href="/contact"
                >
                  Contact Us
                </a>
              </div>
              <span className="text-warning small">
                <i className="fas fa-star mr-1"></i>
                <i className="fas fa-star mr-1"></i>
                <i className="fas fa-star mr-1"></i>
                <i className="fas fa-star mr-1"></i>
                <i className="fas fa-star mr-2"></i>
              </span>
            </div>
            <div
              className="col-lg-6 col-md-12 ml-auto d-none d-lg-block d-xl-block"
              style={{ minHeight: "46rem" }}
              data-aos="fade-up"
            >
              <img
                style={{ position: "relative", left: 0, top: "15%" }}
                alt="Demo"
                src="https://pngimg.com/uploads/student/student_PNG181.png"
                width="100%"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
