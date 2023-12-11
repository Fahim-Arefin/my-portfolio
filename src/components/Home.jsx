// import { Outlet } from "react-router-dom";
// import About from "./About";
import Banner from "./Banner";
// import Contact from "./Contact";
// import Education from "./Education";
import Navbar from "./Navbar";
// import Project from "./Project";

function AppLayout() {
  return (
    <div className="min-h-screen py-6">
      <Navbar />
      <Banner />
      {/* <About /> */}
      {/* <Education />
      <Project />
      <Contact /> */}
    </div>
  );
}

export default AppLayout;
