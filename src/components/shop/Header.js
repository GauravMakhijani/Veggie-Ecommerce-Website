import React, { Component } from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div className="mt-6">
        <Container>
          <h1 className="head-h1">{this.props.heading}</h1>
          <Breadcrumb>
            <Link to="/">Home </Link>
            <Breadcrumb.Item active> / {this.props.heading}</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>
    );
  }
}
