import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import "./ArticlesCardCommon.css";
const ArticlesCardCommon = ({ articleTitle, articleContent }) => {
  return (
    <>
      <Row className="mt-3">
        <Col xs={9}>
          <h2>{articleTitle}</h2>
        </Col>
        <Col xs={3}>
          <FontAwesomeIcon icon={faClock} /> 2 h ago
        </Col>
      </Row>
      <Row>
        <p>{articleContent}</p>
      </Row>
    </>
  );
};

export default ArticlesCardCommon;
