import HomePage from "./pages/HomePage.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Skill from "./pages/Skill.jsx";
import Services from "./pages/Services.jsx";
import { AppSettingsProvider } from "./context/AppSettings.jsx";
import "./theme.css";
import Projects from "./pages/Projects.jsx";
import Edulcation from "./pages/Edulcation.jsx";
import WhyWork from "./pages/WhyWork.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <AppSettingsProvider>
      <HomePage />
      <AboutMe />
      <Skill />
      <Services />
      <Projects />
      <Edulcation />
      <WhyWork />
      <Contact />
      <Footer />
    </AppSettingsProvider>
  );
}

export default App;
