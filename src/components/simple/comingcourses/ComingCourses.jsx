import Card from "react-bootstrap/Card";
import ButtonCreation from "../button/ButtonCreation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faRectangleList,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

const ComingCourses = (props) => {
  return (
    <div className="coming-card d-flex align-items-end relative">
      <span className="absolute ml-5">LEV.{props.level}</span>
      <Card.Img
        variant="left"
        width={250}
        src="https://plus.unsplash.com/premium_photo-1700135090911-e69a7b1c13d0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card bg="transparent" text="light" className="border-0">
        <Card.Header className="border-0 mb-4">
          {props.course} for Beginners
        </Card.Header>
        <Card.Footer className="d-flex justify-between align-items-end gap-5 border-0">
          <ul className="bg-transparent border-0">
            <li>
              <FontAwesomeIcon
                icon={faCalendarCheck}
                className="mr-3 color-main"
              />
              {props.date}
            </li>
            <li>
              <FontAwesomeIcon
                icon={faRectangleList}
                className="mr-3 color-main"
              />
              {props.lesson}
            </li>
          </ul>
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

export default ComingCourses;
