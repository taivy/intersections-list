import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getIntersections } from "./IntersectionActions";

import Intersection from "./Intersection";

class IntersectionsList extends Component {
  componentDidMount() {
    this.props.getIntersections();
  }

  render() {
    const { intersections } = this.props.intersections;

    if (intersections.length === 0) {
      return <h4>No intersections yet</h4>;
    }

    let items = intersections.map(intersection => {
      return <Intersection key={intersection.id} intersection={intersection} />;
    });

    return (
      <div>
        <h2>Intersections</h2>
        {items}
        <hr /> {/* a */}
      </div>
    );
  }
}

IntersectionsList.propTypes = {
  getIntersections: PropTypes.func.isRequired,
  intersections: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  intersections: state.intersections
});

export default connect(mapStateToProps, {
  getIntersections
})(withRouter(IntersectionsList));
