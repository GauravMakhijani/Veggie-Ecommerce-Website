import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="banner-image">
        <div className="banner-text">
          <h1 style={{ fontSize: "5.5em" }}>{this.props.heading}</h1>
        </div>
      </div>
    );
  }
}
