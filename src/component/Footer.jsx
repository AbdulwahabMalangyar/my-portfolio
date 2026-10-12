import { FaGithub, FaLinkedinIn, FaArrowUp, FaCode, FaWhatsapp } from "react-icons/fa";
import { useAppSettings } from "../context/AppSettings.jsx";
import "./Footer.css";

function Footer() {
  const { t } = useAppSettings();
  const pageLinks = [
    [t("home"), "#home"], [t("about"), "#about"], [t("skills"), "#skills"],
    [t("services"), "#services"], [t("projects"), "#projects"],
    [t("education"), "#education"], [t("whyTitle"), "#why-work"], [t("contact"), "#contact"]
  ];
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="footer-logo" href="#home"><span><FaCode /></span> Abdulwahab Saraji</a>
          <p>{t("footerDescription")}</p>
          <div className="footer-socials">
            <a href="https://github.com/AbdulwahabMalangyar" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://wa.me/93788436801" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <h3>{t("quickLinks")}</h3>
          <ul>{pageLinks.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
        </nav>
        <div className="footer-contact">
          <h3>{t("letsConnect")}</h3>
          <p>{t("footerConnectText")}</p>
          <a className="footer-contact-link" href="#contact">{t("contactMe")} <span>↗</span></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Abdulwahab Saraji. {t("allRightsReserved")}</p>
        <a href="#home" className="back-to-top">{t("backToTop")} <FaArrowUp /></a>
      </div>
    </footer>
  );
}
export default Footer;
