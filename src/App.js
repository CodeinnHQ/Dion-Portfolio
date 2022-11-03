import IntroSection from "./section/2_Intro_Section";
import Qualification from "./section/2_Qualification";
import Publication from "./section/3_Publication";
import Skill from "./section/4_Skills";
import Experience from "./section/5_Experience";
import "./variable.css";
import Footer from "./section/6_Footer/index";
import { NavbarDesktop, NavbarMobile } from "./section/1_Navbar";

function App() {
  return (
    <div className="app-container">
      <NavbarDesktop />
      <NavbarMobile />
      <IntroSection />
      <Qualification />
      <Publication />
      <Skill />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
