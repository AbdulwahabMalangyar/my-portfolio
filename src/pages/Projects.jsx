import "./Project.css";
import Pro_Container from "../component/Projects/ProContainer.jsx";
import project_1 from "../assets/project_1.png";
import project_2 from "../assets/project_2.png";
import { useAppSettings } from "../context/AppSettings.jsx";

function Projects() {
  const { t } = useAppSettings();
  const projectDescription = t("projectDescription");
  return (
    <main className="project_header" id="projects">
      <header className="top_project">
        <h2>{t("projectsTitle")}</h2>
        <p>{t("projectsIntro")}</p>
      </header>
      <section className="bottom_project" aria-label={t("projectsTitle")}>
        <Pro_Container Img_url={project_1} title="WUNFPR" description={projectDescription} tools="JavaFX · XML · CSS" btn_url="" btn_name={t("viewProject")} btn_bgcolor="#1877F2" btn_color="white" />
        <Pro_Container Img_url={project_2} title="WUNFPR" description={projectDescription} tools="HTML · CSS · JavaScript · Bootstrap · PHP" btn_url="" btn_name={t("viewProject")} btn_bgcolor="#1877F2" btn_color="white" />
        <Pro_Container Img_url={project_2} title="WUNFPR" description={projectDescription} tools="HTML · CSS · JavaScript · Bootstrap · PHP" btn_url="" btn_name={t("viewProject")} btn_bgcolor="#1877F2" btn_color="white" />
        <Pro_Container Img_url={project_2} title="WUNFPR" description={projectDescription} tools="HTML · CSS · JavaScript · Bootstrap · PHP" btn_url="" btn_name={t("viewProject")} btn_bgcolor="#1877F2" btn_color="white" />
      </section>
    </main>
  );
}
export default Projects;
