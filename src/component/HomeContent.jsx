import "./HomeContent.css";
import Bbutton from "./Bbutton";
import wahab from "../assets/wahab.jpg";
import { useAppSettings } from "../context/AppSettings.jsx";

function HomeContent() {
  const { t } = useAppSettings();
  return (
    <section className="side" id="home">
      <div className="right_side">
        <div className="hero-copy">
          <h6 className="salam">{t("greeting")}</h6>
          <h2 className="web">{t("heroTitle")}<br />{t("heroTitle2")}</h2>
          <p className="prargraph">{t("heroText")}</p>
          
          <div className="hero-buttons">
            <Bbutton title={t("viewWork")} />
            <Bbutton title={t("servicesButton")} />
            <Bbutton title={t("contactMe")} background="transparent" color="white" />
          </div>
        </div>
      </div>
      <div className="left_side">
        <img src={wahab} alt="Abdulwahab Saraji" />
      </div>
    </section>
  );
}

export default HomeContent;
