import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteIntersection, updateIntersection } from "./IntersectionActions";
import { Button, Form } from "react-bootstrap";

class Intersection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onDeleteClick = () => {
    const { intersection } = this.props;
    this.props.deleteIntersection(intersection.id);
  };
  onSaveClick = () => {
    const { intersection } = this.props;
    this.props.updateIntersection(intersection.id, {
      name: intersection.name,
      location: intersection.location,
      streets: intersection.streets,
    });
    this.setState({ editing: false });
  };
  onEditClick = () => {
    this.setState({ editing: true });
  };
  render() {
    const { intersection } = this.props;
    return (
      <div className="intersection-item">
        <hr />
        {(this.state.editing) ? (
          <div>
            <Form>
              <Form.Group controlId="nameInput">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={intersection.name}
                  onChange={this.onChange}
                />
              </Form.Group>
              <Form.Group controlId="locationInput">
                <Form.Label>Location:</Form.Label>
                <Form.Control
                  as="textarea"
                  name="location"
                  placeholder="Enter location"
                  value={intersection.location}
                  onChange={this.onChange}
                />
              </Form.Group>
              <Form.Group controlId="streetsInput">
                <Form.Label>Streets:</Form.Label>
                <Form.Control
                  as="textarea"
                  name="streets"
                  placeholder="Enter streets"
                  value={intersection.streets}
                  onChange={this.onChange}
                />
              </Form.Group>
            </Form>
            <div className="intersection-buttons">
              <Button variant="success" size="sm" onClick={this.onSaveClick}>
                Save
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <p>
                Name: {intersection.name}
              </p>
              <p>
                Location: {intersection.location}
              </p>
              <p>
                Streets: {intersection.streets}
              </p>
            </div>
            <div className="intersection-buttons">
              <Button variant="primary" size="sm" onClick={this.onEditClick}>
                Edit
              </Button>{" "}
              <Button variant="danger" size="sm" onClick={this.onDeleteClick}>
                Delete
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Intersection.propTypes = {
  intersection: PropTypes.object.isRequired
};
const mapStateToProps = state => ({});

export default connect(mapStateToProps, { deleteIntersection, updateIntersection })(
  withRouter(Intersection)
);
