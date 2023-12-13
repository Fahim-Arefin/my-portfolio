import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Education from "./Education";
import Email from "./Email";
import Navbar from "./Navbar";
import OtherProjects from "./OtherProjects";
import Project from "./Project";
import SocialNav from "./SocialNav";

function Home() {
  return (
    <div className="min-h-screen pt-6">
      <Navbar />
      <Banner />
      <About />
      <Education />
      <Project />
      <OtherProjects />
      <SocialNav />
      <Email />
      <Contact />
    </div>
  );
}

export default Home;
