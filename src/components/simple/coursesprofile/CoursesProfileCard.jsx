import Card from "react-bootstrap/Card";

const CoursesProfileCard = (props) => {
  return (
    <div
      bg="transparent"
      text="light"
      className="border-0 coming-card d-flex justify-between align-items-center"
    >
      <Card.Header className="border-0">
        Introduction to {props.course}
        <br />
        <span className="instructor">Instructor:</span> {props.instructor}
      </Card.Header>
      <Card.Footer className="d-flex justify-between align-items-center gap-3 border-0">
        Lev.{props.level}
      </Card.Footer>
    </div>
  );
};

export default CoursesProfileCard;
