import "./JobCard.css";
import JobMainInfo from "../JobMainInfo/JobMainInfo";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
const JobCard = () => {
  return (
    <Container fluid>
      <JobMainInfo
        title={"FrontEnd Developer "}
        location={"Eptikar IT Solutions, Obour City"}
        salaryRange={"5000 EGP - 8000 EGP"}
      />
      <p>
        This position is for our partner Those layouts will be used to
        demonstrate the options and features included in our WordPress Themes
        and Plugins. Also will be included as a part of our products. Designing
        other digital marketing materials like Facebook posts, web banners, etc.
        and other graphics.
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
        <Col xs={10} className="button-holder">
          <Button className="view-details">view details</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default JobCard;
