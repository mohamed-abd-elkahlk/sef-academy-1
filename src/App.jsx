import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
