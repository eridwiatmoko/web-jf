import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Button className="me-auto my-2 my-lg-0" variant="secondary">
          Register
        </Button>{" "}
        <InputGroup className="mb-3">
          <Button variant="outline-secondary" id="button-addon1">
            Search
          </Button>
          <Form.Control
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <p>This is home.</p>
      </div>
    );
  }
}
