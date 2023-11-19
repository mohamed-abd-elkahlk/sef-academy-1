import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./ArticlesForm.css";
const ArticlesForm = () => {
  return (
    <Form className="my-3">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Form.Group>
            <Form.Label>Article Title</Form.Label>
            <Form.Control type="text" className="bg-input text-white" />
          </Form.Group>
        </Col>
        <Col xs={12} md={4}>
          <Form.Group>
            <Form.Label>Category</Form.Label>
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
      <Row className="my-3">
        <Col xs={12}>
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            style={{ height: "200px" }}
            className="bg-input text-white"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={4}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Publishing Date</Form.Label>
            <Form.Control type="date" className="bg-input text-white " />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Upload Cover Photo</Form.Label>
            <p>the upload component</p>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-around justify-content-md-end mb-4">
        <Col xs={2}>
          <Button className="view-details cancel-btn">Cancel</Button>
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

export default ArticlesForm;
