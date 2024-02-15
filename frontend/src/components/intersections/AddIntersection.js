import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { addIntersection } from "./IntersectionActions";

class AddIntersection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      streets: "",
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddClick = () => {
    const intersection = {
      name: this.state.name,
      location: this.state.location,
      streets: this.state.streets,
    };
    this.props.addIntersection(intersection);
  };

  render() {
    return (
      <div style={{marginBottom: "36px"}}>
        <h4>Add new intersection</h4>
        <Form>
          <Form.Group controlId="nameInput">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              value={this.name}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="locationInput">
            <Form.Label>Location:</Form.Label>
            <Form.Control
              as="textarea"
              name="location"
              placeholder="Enter location"
              value={this.location}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="streetsInput">
            <Form.Label>Streets:</Form.Label>
            <Form.Control
              as="textarea"
              name="streets"
              placeholder="Enter streets"
              value={this.streets}
              onChange={this.onChange}
            />
          </Form.Group>
        </Form>
        <Button variant="success" onClick={this.onAddClick}>
          Add
        </Button>
      </div>
    );
  }
}

AddIntersection.propTypes = {
  addIntersection: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { addIntersection })(withRouter(AddIntersection));
