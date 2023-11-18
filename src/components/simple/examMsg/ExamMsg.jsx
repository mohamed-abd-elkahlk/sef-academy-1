import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";

const ExamMsg = () => {
  return (
    <Button
      variant="dark"
      disabled
      className="d-flex align-items-center justify-center"
    >
      <FontAwesomeIcon icon={faCircleCheck} className="mr-3" fontSize={40} />
      <p>ALL CLEAR, YOU DON&apos;T HAVE ANY EXAMS TODAY.</p>
    </Button>
  );
};

export default ExamMsg;
