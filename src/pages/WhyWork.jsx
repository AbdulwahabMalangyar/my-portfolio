import "./whyword.css";
import WhyContainer from "../component/whyword/WhyContainer.jsx";
import { FaLaptopCode, FaCode, FaMobileAlt, FaCogs, FaUsers, FaDatabase } from "react-icons/fa";
import { useAppSettings } from "../context/AppSettings.jsx";

function WhyWork() {
  const { t } = useAppSettings();
  return (
    <main className="whywork-section" id="why-work">
      <header className="whywork-header">
        <h1>{t("whyTitle")}</h1>
        <p>{t("whyIntro")}</p>
      </header>
      <section className="whywork-grid" aria-label={t("whyTitle")}>
        <WhyContainer icon={<FaLaptopCode />} title={t("modernSolutions")} subtitle={t("modernSolutionsText")} />
        <WhyContainer icon={<FaCode />} title={t("cleanCode")} subtitle={t("cleanCodeText")} />
        <WhyContainer icon={<FaMobileAlt />} title={t("responsiveDesign")} subtitle={t("responsiveDesignText")} />
        <WhyContainer icon={<FaCogs />} title={t("practicalSystems")} subtitle={t("practicalSystemsText")} />
        <WhyContainer icon={<FaUsers />} title={t("userFocused")} subtitle={t("userFocusedText")} />
        <WhyContainer icon={<FaDatabase />} title={t("databaseSolutions")} subtitle={t("databaseSolutionsText")} />
      </section>
    </main>
  );
}
export default WhyWork;
