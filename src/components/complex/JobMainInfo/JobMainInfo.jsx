import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./JobMainInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLocationDot } from "@fortawesome/free-solid-svg-icons";

function JobMainInfo({ title, location, salaryRange }) {
  return (
    <Row className="job-main-info">
      <Col>
        <Row>
          <Col xs={8}>
            <Row>
              <Col xs={3}>
                <p className="reddish-p">
                  <FontAwesomeIcon icon={faBars} />
                  IT
                </p>
              </Col>
              <Col xs={8}>
                <h4>{title}</h4>
                <h6>{location}</h6>
              </Col>
            </Row>
          </Col>
          <Col xs={4}>
            <Row>
              <Col>
                <p>
                  <strong>{salaryRange}</strong> Per Month
                </p>
                <h6 className="on-site">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="location-icon"
                  />
                  &nbsp; OnSite
                </h6>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default JobMainInfo;
