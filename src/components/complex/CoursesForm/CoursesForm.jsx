import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./CoursesForm.css";

const CoursesForm = () => {
  return (
    <Form>
      <Row className="justify-content-between my-4">
        <Col xs={4} md={3}>
          <h6>Add User Details</h6>
        </Col>
        <Col xs={5} md={3} className="ps-5" style={{ textAlign: "right" }}>
          <Button className="view-details  ">PUBLISH</Button>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={7}>
          <Form.Group>
            <Form.Label>Course Name</Form.Label>
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
        <Col md={2}>
          <Form.Group>
            <Form.Label>Level</Form.Label>
            <Form.Control type="text" className="bg-input text-white" />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Number of Lessons</Form.Label>
            <Form.Control type="text" className="bg-input text-white" />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={3}>
          <Form.Group>
            <Form.Label>Language</Form.Label>
            <Form.Control type="text" className="bg-input text-white" />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="date" className="bg-input text-white " />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Duration</Form.Label>
            <Form.Control type="text" className="bg-input text-white" />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Certificate</Form.Label>
            <Form.Control type="text" className="bg-input text-white" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3 ">
        <Col xs={12}>
          <Form.Label>Course Introduction</Form.Label>
          <Form.Control
            as="textarea"
            style={{ height: "100px" }}
            className="bg-input text-white"
          />
        </Col>
      </Row>
      <Row className="mb-3 ">
        <Col md={6}>
          <Form.Label>Course Assessment</Form.Label>
          <Form.Control
            as="textarea"
            style={{ height: "100px" }}
            className="bg-input text-white"
          />
        </Col>
        <Col md={6}>
          <Form.Label>Course Requirements</Form.Label>
          <Form.Control
            as="textarea"
            style={{ height: "100px" }}
            className="bg-input text-white"
          />
        </Col>
      </Row>
      <Row className="mb-3 ">
        <Col xs={12}>
          <Form.Label>Course Materials</Form.Label>
          <Form.Control
            as="textarea"
            style={{ height: "100px" }}
            className="bg-input text-white"
          />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Publishing Date</Form.Label>
            <Form.Control type="date" className="bg-input text-white" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Instructor</Form.Label>
            <Form.Control type="text" className="bg-input text-white" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <p>Upload component</p>
        </Col>
      </Row>
      <Row className="justify-content-around justify-content-md-end mb-4">
        <Col xs={2}>
          <Button className="cancel-btn">Cancel</Button>
        </Col>
        <Col xs={2} className="ps-md-5">
          <Button type="submit" className="view-details me-5">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CoursesForm;
