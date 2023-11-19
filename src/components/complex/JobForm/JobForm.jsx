import React from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import "./JobForm.css";
const JobForm = () => {
  return (
    <Form>
      <Row className="mt-3">
        <Col xs={8}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" className="bg-input text-white" />
          </Form.Group>
          <Row>
            <Col xs={6}>
              <Form.Select
                aria-label="Default select example text-white"
                className="bg-input text-white"
              >
                <option hidden>Field</option>
                <option value="wd">Web Developement</option>
                <option value="de">Data Engineering</option>
                <option value="ml">Machine Learning</option>
              </Form.Select>
            </Col>
            <Col xs={6}>
              <Form.Select
                aria-label="Default select example text-white"
                className="bg-input text-white"
              >
                <option hidden>Location</option>
                <option value="egp">Egypt</option>
                <option value="uae">UAE</option>
                <option value="sae">SAE</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
        <Col xs={4}>the upload comp</Col>
      </Row>
      <Row className="my-4">
        <Col xs={12}>
          <Form.Label>About Company</Form.Label>
          <Form.Control
            as="textarea"
            style={{ height: "100px" }}
            className="bg-input text-white"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Position</Form.Label>
            <Form.Control type="text" className="bg-input text-white " />
          </Form.Group>
        </Col>
        <Col xs={4}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Job type</Form.Label>
            <Form.Control type="text" className="bg-input text-white" />
          </Form.Group>
        </Col>
        <Col xs={1} className="align-self-md-center">
          radio, remote
        </Col>
        <Col xs={1} className="align-self-md-center">
          radio, onsite
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <Form.Group className="mb-3 me-5" controlId="formBasicEmail">
            <Form.Label>Salary Range</Form.Label>
            <Form.Control type="text" className="bg-input text-white" />
          </Form.Group>
        </Col>
        <Col xs={1} className="align-self-center h5 pt-4">
          To
        </Col>
        <Col xs={3} className="align-self-end">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" className="bg-input text-white" />
          </Form.Group>
        </Col>
        <Col xs={3}>
          <Form.Label>Currency</Form.Label>
          <Form.Select
            aria-label="Default select example text-white"
            className="bg-input text-white"
          >
            <option hidden>choose</option>
            <option value="le">LE</option>
            <option value="us">US $</option>
          </Form.Select>
        </Col>
        <Col xs={2}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Job link</Form.Label>
            <Form.Control type="text" className="bg-input text-white" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="my-4">
        <Col xs={12}>
          <Form.Label>Job Description</Form.Label>
          <Form.Control
            as="textarea"
            style={{ height: "100px" }}
            className="bg-input text-white"
          />
        </Col>
      </Row>
      <Row className="my-4">
        <Col xs={12}>
          <Form.Label>Job Requirement</Form.Label>
          <Form.Control
            as="textarea"
            style={{ height: "100px" }}
            className="bg-input text-white"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Form.Label>Skills</Form.Label>
          <Container fluid className="skill-container mb-4 p-2 ps-4">
            <Row>
              <Col xs={2}>
                <div className="skill-card">React js</div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className="justify-content-around justify-content-md-end mb-4 ">
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

export default JobForm;
