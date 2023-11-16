import "./JobDescription.css";
import JobMainInfo from "../JobMainInfo/JobMainInfo";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
const JobDescription = ({ companyHiringDesc, jobDescription, jobReq }) => {
  return (
    <Container fluid>
      <Container fluid>
        <JobMainInfo
          title={"FrontEnd Developer "}
          location={"Eptikar IT Solutions, Obour City"}
          salaryRange={"5000 EGP - 8000 EGP"}
        />
        <p>
          This position is for our partner Those layouts will be used to
          demonstrate the options and features included in our WordPress Themes
          and Plugins. Also will be included as a part of our products.
          Designing other digital marketing materials like Facebook posts, web
          banners, etc. and other graphics.
        </p>
        <Row gap={5}>
          <Col xs={3}>
            <div className="skill-card">React Js</div>
          </Col>
          <Col xs={3}>
            <div className="skill-card">Development</div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={2}>
            <FontAwesomeIcon icon={faClock} /> 2 h ago
          </Col>
        </Row>
      </Container>
      <div className="wrap-up">
        <div className="mt-4">
          <div>
            <h5>About us</h5>
            <p>{companyHiringDesc}</p>
          </div>
          <div className="mt-4">
            <h5>Job Description</h5>
            <p>{jobDescription}</p>
          </div>
          <div className="mt-4">
            <h5>Job Requirements</h5>
            <p>{jobReq}</p>
          </div>
        </div>
      </div>
      <Row className="button-holder mb-4">
        <Col xs={2}>
          <Button className="view-details">Apply</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default JobDescription;
