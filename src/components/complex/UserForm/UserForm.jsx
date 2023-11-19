import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./UserForm.css";
const UserForm = () => {
  return (
    <Form>
      <Row className="justify-content-between my-4">
        <Col xs={4} md={3}>
          <h6>Add User Details</h6>
        </Col>
        <Col xs={5} md={3} className="ps-5">
          <Button className="view-details ">PUBLISH</Button>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={4}>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" className="bg-input text-white" />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" className="bg-input text-white" />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Select
              aria-label="Default select example text-white"
              className="bg-input text-white "
            >
              <option hidden className="text-white"></option>
              <option value="wd">Web Developement</option>
              <option value="de">Data Engineering</option>
              <option value="ml">Machine Learning</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={8}>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" className="bg-input text-white" />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Role</Form.Label>
            <Form.Select
              aria-label="Default select example text-white"
              className="bg-input text-white "
            >
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
              <option value="admin">Admin</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="text" className="bg-input text-white" />
          </Form.Group>
        </Col>
        <Col md={5}>
          <Form.Group>
            <Form.Label>User Id</Form.Label>
            <Form.Control type="text" className="bg-input text-white" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" className="bg-input text-white" />
          </Form.Group>
        </Col>
        <Col md={5}>
          <Form.Group>
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password" className="bg-input text-white" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={4}>
          <Form.Group>
            <Form.Label>Score</Form.Label>
            <Form.Control type="text" className="bg-input text-white" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-between my-4">
        <Col xs={5} md={3}>
          <Button className="cancel-btn">Cancel</Button>
        </Col>
        <Col xs={5} md={3} className="ps-5">
          <Button type="submit" className="view-details ">
            save
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default UserForm;
