import "./Services.css";
import { FaCode, FaDatabase, FaMobileAlt } from "react-icons/fa";
import { useAppSettings } from "../context/AppSettings.jsx";

function Services() {
  const { t } = useAppSettings();
  const services = [
    { title: t("webDevelopment"), icon: <FaCode />, description: t("webDescription") },
    { title: t("databaseDevelopment"), icon: <FaDatabase />, description:t("databaseDescription") },
    { title: t("appDevelopment"), icon: <FaMobileAlt />, description: t("appDescription") }
  ];

  return (
    <section className="services-section" id="services">
      <header className="services-header">
        <h2>{t("servicesTitle")}</h2>
        <p>{t("servicesIntro")}</p>
        <br /><br />
      </header>
      <div className="services-list">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="service-icon" aria-hidden="true">{service.icon}</span>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Services;
