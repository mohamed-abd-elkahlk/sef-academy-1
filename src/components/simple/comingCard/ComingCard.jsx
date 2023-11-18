import Card from "react-bootstrap/Card";
import TimeAgo from "../timeAgo/TimeAgo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

const ComingCard = (props) => {
  return (
    <div className="coming-card d-flex">
      <Card bg="dark" text="light" className="calendar text-center">
        <Card.Body>
          <p>22nd</p>
          <p>JUN</p>
        </Card.Body>
        <Card.Footer className="bg-warning">Wed</Card.Footer>
      </Card>
      <Card bg="transparent" text="light" className="border-0">
        <Card.Header className="border-0">
          Introduction to {props.course}
          {props.edit && (
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="ml-10 cursor-pointer"
            />
          )}
          <br />
          <span className="instructor">Instructor:</span> {props.instructor}
        </Card.Header>
        <Card.Footer className="d-flex justify-between align-items-center gap-3 border-0">
          Lev.{props.level} Exam
          <TimeAgo timeAgo="16:34" color="light" />
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ComingCard;
