import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Container, Navbar } from "react-bootstrap";

import IntersectionsList from "./IntersectionList";
import AddIntersection from "./AddIntersection";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light">
          <Navbar.Brand href="/">Home</Navbar.Brand>
        </Navbar>
        <Container>
          <IntersectionsList />
          <AddIntersection />
        </Container>
      </div>
    );
  }
}

Dashboard.propTypes = {};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, {
})(withRouter(Dashboard));
