import About from "./About";
import Banner from "./Banner";
// import Contact from "./Contact";
import Education from "./Education";
import Navbar from "./Navbar";
import OtherProjects from "./OtherProjects";
import Project from "./Project";

function Home() {
  return (
    <div className="min-h-screen py-6">
      <Navbar />
      <Banner />
      <About />
      <Education />
      <Project />
      <OtherProjects />
      {/* <Contact /> */}
    </div>
  );
}

export default Home;
