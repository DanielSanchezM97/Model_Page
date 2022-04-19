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
          <div className="imagesC">
            <div className="row g-0">
              <div className="col-md-4 col-lg-4" id="col1">
                <img
                  src="ResizedModels/newmodel1.jpg"
                  alt=""
                  className="photos"
                  id="model1"
                />
              </div>
              <div className="col-md-4 col-lg-4" id="cols">
                <img
                  src="ResizedModels/model-2.jpg"
                  alt=""
                  className="photos"
                  id="model2"
                />
              </div>
              <div className="col-md-4 col-lg-4" id="cols">
                <img
                  src="ResizedModels/model3.jpg"
                  alt=""
                  className="photos"
                  id="model3"
                />
              </div>
            </div>
            <div className="row g-0">
              <div className="col-md-4 col-lg-4" id="cols">
                <img src="ResizedModels/model4.jpg" alt="" className="photos" />
              </div>
              <div className="col-md-4 col-lg-4" id="cols">
                <img
                  src="ResizedModels/model5.jpg"
                  alt=""
                  className="photos"
                  id="model5"
                />
              </div>
              <div className="col-md-4 col-lg-4" id="cols">
                <img src="ResizedModels/model6.jpg" alt="" className="photos" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
