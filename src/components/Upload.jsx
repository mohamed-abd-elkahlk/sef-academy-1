import React from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function UploadCv({
  email,
  yearsOfExperience,
  mobileNumber,
  handleYearsOfExperienceChange,
  handleEmailChange,
  handleMobileNumberChange,
}) {
  return (
    <>
      <Form>
        <Row className="email">
          <Form.Group as={Col} controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              style={{ width: 300, backgroundColor: "grey" }}
              type="text"
              id="validationDefault04"
              required
              onChange={handleEmailChange}
              value={email}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formYearsOfExperience">
            <Form.Label>Years of eperience</Form.Label>
            <Form.Control
              style={{ backgroundColor: "grey" }}
              type="date"
              id="validationDefault05"
              required
              onChange={handleYearsOfExperienceChange}
              value={yearsOfExperience}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formMobileNumber">
          <Form.Label>Mobile number</Form.Label>
          <Form.Control
            type="number"
            id="validationDefault06"
            style={{ backgroundColor: "gray" }}
            required
            onChange={handleMobileNumberChange}
            value={mobileNumber}
          />
        </Form.Group>

        <Row className="mb-3"></Row>

        <Button
          type="submit"
          onClick={handlePublish}
          value={publish}
          style={{ backgroundColor: "#bf9b30" }}
        >
          Publish
        </Button>
      </Form>
      <div className="questios">
        <h4 className="Questions" style={{ marginTop: 70 }}>
          Questions
        </h4>
      </div>
    </>
  );
}

export default UploadCv;
