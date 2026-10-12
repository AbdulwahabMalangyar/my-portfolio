import "./Education.css";
import Container from "../component/Education/Container.jsx";
import { FaUniversity, FaSchool, FaLanguage, FaGraduationCap, FaBriefcase, FaLaptopCode } from "react-icons/fa";
import { useAppSettings } from "../context/AppSettings.jsx";

function Edulcation() {
  const { t } = useAppSettings();
  return (
    <main className="education-section" id="education">
      <header className="education-header">
        <h2>{t("educationTitle")}</h2>
        <p>{t("educationIntro")}</p>
      </header>
      <section className="education-grid" aria-label={t("educationTitle")}>
        <Container icon={<FaUniversity />} title={t("universityName")} subtitle={t("universitySubtitle")} description={t("universityDescription")} />
        <Container icon={<FaSchool />} title={t("schoolName")} subtitle={t("secondaryEducation")} description={t("schoolDescription")} />
        <Container icon={<FaLanguage />} title={t("languagesTitle")} subtitle={t("languagesSubtitle")} description={t("languagesDescription")} />
        <Container icon={<FaGraduationCap />} title={t("englishCenter")} subtitle={t("englishGraduate")} description={t("englishDescription")} />
        <Container icon={<FaBriefcase />} title={t("officeManagement")} subtitle={t("professionalSkills")} description={t("officeDescription")} />
        <Container icon={<FaLaptopCode />} title={t("computerCenter")} subtitle={t("computerTraining")} description={t("computerDescription")} />
      </section>
    </main>
  );
}
export default Edulcation;
