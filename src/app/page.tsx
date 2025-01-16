
import Top from "./Top/page";
import Navbar from "./Navbar/page";
import Education from "./Education/page";
import Skill from "./Skill/page";
import Achievements from "./Achievements/page";
import Project from "./Projects/page";
import AboutMe from "./AboutMe/page";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Top></Top>
      <AboutMe></AboutMe>
      <Education></Education>
      <Skill></Skill>
      <Achievements></Achievements>
      <Project></Project>

      <footer className="footer footer-center bg-base-300 text-base-content p-4 mt-10">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Labid Al Nahiyan</p>
        </aside>
      </footer>
    </div>
  );
}
