import React, { Component } from "react";

export default class AboutMe extends Component {
  render() {
    return (
      <div
        className="d-flex flex-column text-center justify-content-center align-items-center"
        id="AboutMe-Container"
      >
        <div className="AboutMe-Photo">
          <img
            src="images/aboutEdited.jpg"
            alt="Paula Martinez"
            className="img-fluid mx-auto d-block rounded-circle"
            id="AboutMe-Photo"
          />
        </div>
        <div className="AboutMe-text d-flex flex-column text-center px-5 my-4">
          <h1 className="AboutMe-title">Meet Paula Martinez</h1>
          <h5 className="AboutMe-subtitle">
            Model | Actor | Photographer | Dancer | Fashion Designer
          </h5>
          <p className="AboutMe-paragraph my-3 px-3">
            Hello my name is <strong>Paula Martinez</strong> <br /> I was born
            and raised in Delaware but moved to California when I turned 19 with
            my family. I am very passionate about art, dance and sports, I also
            love to spend time with my family and I love modeling. I started my
            modeling career at the age of 21 and since then I have been
            attracted to how you can express the beauty and artistry of a woman
            through modeling. Currently I have dedicated myself to travel with
            my husband and at the same time work in what I am passionate about
            knowing the beauty of each country and its beautiful people.
          </p>
        </div>
      </div>
    );
  }
}
