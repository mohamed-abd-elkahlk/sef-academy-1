import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/simple/categoryItem/Navbar";
import DragDropFiles from "./amany/DragDropFiles";
import { useRef } from "react";
function App() {
  const inputRef = useRef(null);
  return (
    <Container>
      <h1 className="text-vuejs">hellow world</h1>
      <NavbarComponent />
      <DragDropFiles />
    </Container>
  );
}

export default App;
