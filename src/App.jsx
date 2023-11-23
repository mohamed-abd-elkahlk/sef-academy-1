import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
// import Profile from "./salime/Profile";
import Footer from "./layout/Footer";
function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Profile /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
