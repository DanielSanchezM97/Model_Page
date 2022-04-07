import React, { Component } from "react";

export default class HeroSection extends Component {
  render() {
    return (
      <>
        <div className="hero-section">
          <div className="hero-section-image d-flex">
            <img
              src="images/test1.jpg"
              alt="Paula Martinez"
              className="main-model-image"
            />
            <h1 className="Name">Paula Martinez</h1>
            <p className="heroParagraph">
              Actor | Model | Photographer | Dancer
            </p>
          </div>
        </div>
      </>
    );
  }
}
