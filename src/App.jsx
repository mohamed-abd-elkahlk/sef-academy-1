import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserStatusCard from "./components/simple/userStatus/UserStatusCard";
import CourseStatusCard from "./components/simple/courseStatusCard/CourseStatusCard";
import ComingExam from "./components/simple/comingExam/ComingExam";
import ExamMsg from "./components/simple/examMsg/ExamMsg";
import ComingCard from "./components/simple/comingCard/ComingCard";
import RegisteredCard from "./components/simple/registeredCard/RegisteredCard";
import ComingCourses from "./components/simple/comingcourses/ComingCourses";
import CoursesProfileCard from "./components/simple/coursesprofile/CoursesProfileCard";
function App() {
  const inputRef = useRef(null);
  return (
    <Container>
      <UserStatusCard
        name="lara"
        status="active"
        role="admin"
        userID="qwrdwasd"
      />
      <br />
      <CourseStatusCard
        name="lara"
        status="active"
        instructor="admin"
        start="22/06/1999"
        level="66"
        published="qwrdwasd"
      />
      <br />
      <ComingExam exam="3453" />
      <br />
      <ExamMsg />
      <br />
      <ComingCard course="ReactJS" instructor="Mohamd" level="14" />
      <br />
      <RegisteredCard course="ReactJS" instructor="Mohamd" level="14" />
      <br />
      <ComingCard course="ReactJS" instructor="Mohamd" level="14" edit={true} />
      <br />
      <RegisteredCard
        course="ReactJS"
        instructor="Mohamd"
        level="14"
        student={20}
      />
      <br />
      <ComingCourses
        date="Wednesday, June 7th"
        course="ReactJS"
        instructor="Mohamd"
        level="14"
        lesson="12 lessons"
      />
      <br />
      <CoursesProfileCard course="ReactJS" instructor="Mohamd" level="14" />
    </Container>
  );
}

export default App;
