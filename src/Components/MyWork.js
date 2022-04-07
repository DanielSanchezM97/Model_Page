import React, { Component } from "react";

export default class MyWork extends Component {
  render() {
    return (
      <>
        <div>
          <div className="container d-flex flex-column justify-content-center text-center my-5">
            <h1 className="myWork-text">My Work</h1>
            <p className="myWork-paragraph" id="work">
              My experience in the modeling field has more than 5 years of
              history with several great companies and talented people.
            </p>
          </div>
          <div className="row g-0">
            <div className="col-md-4 col-lg-4" id="col1">
              <img
                src="images/model1.jpg"
                alt=""
                className="img-fluid photos"
              />
            </div>
            <div className="col-md-4 col-lg-4" id="cols">
              <img
                src="images/model2.jpg"
                alt=""
                className="img-fluid photos"
                id="model2"
              />
            </div>
            <div className="col-md-4 col-lg-4" id="cols">
              <img
                src="images/model3.jpg"
                alt=""
                className="img-fluid photos"
                id="model3"
              />
            </div>
          </div>
          <div className="row g-0">
            <div className="col-md-4 col-lg-4" id="cols">
              <img
                src="images/model4.jpg"
                alt=""
                className="img-fluid photos"
              />
            </div>
            <div className="col-md-4 col-lg-4" id="cols">
              <img
                src="images/model5.jpg"
                alt=""
                className="img-fluid photos"
                id="model5"
              />
            </div>
            <div className="col-md-4 col-lg-4" id="cols">
              <img
                src="images/model6.jpg"
                alt=""
                className="img-fluid photos"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
