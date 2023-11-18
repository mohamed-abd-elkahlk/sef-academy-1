import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Footer from "./layout/Footer";
import LoginForm from "./components/amany/LoginForm";
function App() {
  return (
    <Container>
      <LoginForm/>
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
