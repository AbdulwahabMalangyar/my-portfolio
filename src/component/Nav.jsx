import { useState } from "react";
import "./Nav.css";
import { FaSun, FaMoon, FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { useAppSettings } from "../context/AppSettings.jsx";

function Nav() {
  const { language, setLanguage, theme, setTheme, t } = useAppSettings();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["home", "#home"], ["about", "#about"], ["skills", "#skills"],
    ["services", "#services"], ["projects", "#projects"],
    ["education", "#education"], ["contact", "#contact"]
  ];

  function closeMenu() { setMenuOpen(false); }

  return (
    <nav className="nav" aria-label="Main navigation">
      <a className="nav-brand" href="#home" onClick={closeMenu}>
        <span className="nav-brand-mark">W</span>
        <span className="nav-brand-name">Abdulwahab <b>Saraji</b></span>
      </a>

      <div className="nav-tools">
        <label className="language-control" htmlFor="language-select" aria-label="Language">
          <FaGlobe aria-hidden="true" />
          <select id="language-select" value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="ps">پښتو</option>
            <option value="fa">دری</option>
          </select>
        </label>
        <button type="button" className="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={theme === "dark" ? t("lightMode") : t("darkMode")} title={theme === "dark" ? t("lightMode") : t("darkMode")}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
        <button type="button" className="nav-menu-toggle" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <ul className={`nav-list${menuOpen ? " is-open" : ""}`}>
        {links.map(([key, href]) => (
          <li key={key}><a href={href} onClick={closeMenu}>{t(key)}</a></li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
