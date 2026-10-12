import "./Skill.css";
import { FaCode, FaReact, FaNodeJs, FaJava, FaPython, FaPhp, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiMysql, SiFlutter, SiExpress, SiBootstrap, SiSqlite } from "react-icons/si";
import Container from "../component/Skills/Container.jsx";
import { useAppSettings } from "../context/AppSettings.jsx";

const skills = [
  { name: "HTML & CSS", percent: 90, icon: <FaCode /> },
  { name: "JavaScript", percent: 82, icon: <SiJavascript /> },
  { name: "React.js", percent: 80, icon: <FaReact /> },
  { name: "Node.js", percent: 75, icon: <FaNodeJs /> },
  { name: "MongoDB", percent: 75, icon: <SiMongodb /> },
  { name: "MySQL", percent: 78, icon: <SiMysql /> },
  { name: "Java / JavaFX", percent: 80, icon: <FaJava /> },
  { name: "Flutter", percent: 65, icon: <SiFlutter /> },
  { name: "Python", percent: 68, icon: <FaPython /> },
  { name: "PHP", percent: 65, icon: <FaPhp /> },
  { name: "Express.js", percent: 72, icon: <SiExpress /> },
  { name: "Bootstrap", percent: 78, icon: <SiBootstrap /> },
  { name: "SQLite", percent: 72, icon: <SiSqlite /> },
  { name: "Git & GitHub", percent: 65, icon: <FaGitAlt /> },
];

function Skill() {
  const { t } = useAppSettings();
  return (
    <section className="skills-section" id="skills">
      <header className="skills-header">
       
        <h2 className="headingP">{t("skillsTitle")}</h2>
        <p className="headingP">{t("skillsIntro")}</p>
        <br />
      </header>
      <div className="skills-grid">
        {skills.map((skill) => (
          <Container key={skill.name} Icon={skill.icon} Name={skill.name} Percent={skill.percent} />
        ))}
      </div>
    </section>
  );
}
export default Skill;
