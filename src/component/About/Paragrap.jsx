import "./paragrap.css";
import { FaUniversity, FaGraduationCap, FaUserTie, FaLaptopCode, FaMapMarkerAlt, FaLanguage } from "react-icons/fa";
import Container from "./Container";
import { useAppSettings } from "../../context/AppSettings.jsx";

function Paragrap() {
  const { t } = useAppSettings();
  return (
    <section className="about-section" id="about">

      <h2 className="subject">{t("aboutTitle")}</h2>
<br /><br /> 
      <div className="about">
        <div className="about_left">
          <p>{t("about1")}</p>
          <p>{t("about2")}</p>
          <p>{t("about3")}</p>
        </div>
        <div className="about_right">
          <Container icon={<FaUniversity />} title={t("university")} subtitle={t("universityName")} />
        
          <Container icon={<FaLaptopCode />} title={t("department")} subtitle={t("informationSystems")} />
        
          <Container icon={<FaUserTie />} title={t("status")} subtitle={t("engineerGraduate")} />
          <Container icon={<FaGraduationCap />} title={t("faculty")} subtitle={t("computerScience")} />
          <Container icon={<FaMapMarkerAlt />} title={t("location")} subtitle={t("wardakAfghanistan")} />
          <Container icon={<FaLanguage />} title={t("english")} subtitle={t("languageSkills")} />
        </div>
      </div>
      <br /><br /><br /><br />
    </section>
    
  );
}
export default Paragrap;
