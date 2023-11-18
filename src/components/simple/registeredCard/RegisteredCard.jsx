import Card from "react-bootstrap/Card";
import ButtonCreation from "../button/ButtonCreation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const RegisteredCard = (props) => {
  return (
    <div className="coming-card">
      <Card bg="transparent" text="light" className="border-0">
        <Card.Header className="border-0">
          Introduction to {props.course}
          <br />
          <span className="instructor">Instructor:</span> {props.instructor}
        </Card.Header>
        <Card.Footer className="d-flex justify-between align-items-center gap-3 border-0">
          Lev.{props.level} Exam
          <div className="d-flex justify-between align-items-center gap-5">
            {props.student && (
              <div>
                <FontAwesomeIcon icon={faUser} className="color-main mr-3" />
                {props.student} student
              </div>
            )}
            <ButtonCreation title="View Details" />
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default RegisteredCard;
