import Badge from "react-bootstrap/Badge";

const ComingExam = (props) => {
  return (
    <div>
      <Badge bg="transparent" className="border-1 btn-exam mr-3">
        {props.exam}
      </Badge>
      UPCOMING EXAMS
    </div>
  );
};

export default ComingExam;
