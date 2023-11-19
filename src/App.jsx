import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import JobForm from "./components/complex/JobForm/JobForm";
import CertificateForm from "./components/complex/CertificateForm/CertificateForm";
import ArticlesForm from "./components/complex/ArticlesForm/ArticlesForm";
import UserForm from "./components/complex/UserForm/UserForm";
import CoursesForm from "./components/complex/CoursesForm/CoursesForm";
function App() {
  return (
    <Container>
      <CoursesForm />
    </Container>
  );
}

export default App;
