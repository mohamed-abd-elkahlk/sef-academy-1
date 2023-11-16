import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./CertificateForm.css";
const CertificateForm = () => {
  return (
    <Form>
      <Row className="my-4">
        <Col>Category with underline component</Col>
      </Row>
      <Row>
        <Col xs={12} sm={4}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Student Name</Form.Label>
            <Form.Control type="text" className="bg-input text-white " />
          </Form.Group>
        </Col>
        <Col xs={12} sm={4}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date Acquired</Form.Label>
            <Form.Control type="date" className="bg-input text-white " />
          </Form.Group>
        </Col>
        <Col xs={12} sm={4}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Upload Date</Form.Label>
            <Form.Control type="date" className="bg-input text-white " />
          </Form.Group>
        </Col>
      </Row>
      <Row className="my-4">
        <Col xs={12}>
          <Form.Select
            aria-label="Default select example text-white"
            className="bg-input text-white"
          >
            <option hidden>Course</option>
            <option value="fes">Front End stack</option>
            <option value="bes">Back End Stack</option>
            <option value="pvp">Programming via python</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>The upload component</Col>
      </Row>
      <Row className="justify-content-end mb-4 ">
        <Col xs={4} sm={3} className="me-4">
          <Button className="cancel-btn">Cancel</Button>
        </Col>
        <Col xs={4} sm={3}>
          <Button type="submit" className="view-details">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CertificateForm;
