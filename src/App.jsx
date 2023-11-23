import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
<<<<<<< Updated upstream
=======
import JobSearch from "./components/simple/searchjob/JobSearch";
import JobSidebar from "./components/simple/jobsearchsidebar/JobSidebar";
import ThirdStep from "./components/simple/cvforms/ThirdStep";
import FourthStep from "./components/simple/cvforms/FourthStep";
import FirstStep from "./components/simple/cvforms/FirstStep";
import { SecondStep } from "./components/simple/cvforms/SecondStep";
import FifthStep from "./components/simple/cvforms/FifthStep";
import SixthStep from "./components/simple/cvforms/SixthStep";
import SeventhStep from "./components/simple/cvforms/SeventhStep";
import EighthStep from "./components/simple/cvforms/EighthStep";
>>>>>>> Stashed changes
function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< Updated upstream
        </Routes>
=======
        </Routes> */}
        <JobSearch />
        <JobSidebar />
        <FirstStep />
        <SecondStep />
        <ThirdStep />
        <FourthStep />
        <FifthStep />
        <SixthStep />
        <SeventhStep />
        <EighthStep />
>>>>>>> Stashed changes
        <Footer />
      </div>
    </>
  );
}

export default App;
