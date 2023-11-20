import "./App.css";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import JobSearch from "./components/simple/searchjob/JobSearch";
import JobSidebar from "./components/simple/jobsearchsidebar/JobSidebar";
import FirstStep from "./components/simple/cvforms/FirstStep";
function App() {
  return (
    <>
      <div className="container h-[100vh]">
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
        <JobSearch />
        <JobSidebar />
        <FirstStep />
        <Footer />
      </div>
    </>
  );
}

export default App;
