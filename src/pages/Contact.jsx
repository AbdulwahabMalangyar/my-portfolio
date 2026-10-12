import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaRegUser, FaCommentDots, FaGithub, FaWhatsapp } from "react-icons/fa";
import { useAppSettings } from "../context/AppSettings.jsx";
import "./Contact.css";

const CONTACT_EMAIL = "wahabmalng49@gmail.com";
const GITHUB_URL = "https://github.com/AbdulwahabMalangyar";
const WHATSAPP_URL = "https://wa.me/93788436801";

function Contact() {
  const { t } = useAppSettings();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  function handleSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }
  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <header className="contact-header">
          <span className="contact-eyebrow">{t("contactEyebrow")}</span>
          <h2>{t("contactTitle")}</h2>
          <p>{t("contactIntro")}</p>
        </header>
        <div className="contact-layout">
          <aside className="contact-info">
            <h3>{t("workTogether")}</h3>
            <p>{t("contactIntro2")}</p>
            <div className="contact-info-item"><span className="contact-info-icon"><FaEnvelope /></span><div><strong>{t("email")}</strong><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div></div>
            <div className="contact-info-item"><span className="contact-info-icon"><FaMapMarkerAlt /></span><div><strong>{t("locationLabel")}</strong><span>{t("wardakAfghanistan")}</span></div></div>
            <div className="contact-info-item"><span className="contact-info-icon"><FaGithub /></span><div><strong>{t("github")}</strong><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">{t("visitGithub")}</a></div></div>
            <div className="contact-info-item"><span className="contact-info-icon"><FaWhatsapp /></span><div><strong>{t("whatsapp")}</strong><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{t("whatsappChat")}</a></div></div>
          </aside>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="contact-name">{t("yourName")}</label>
            <div className="contact-input-wrap"><FaRegUser aria-hidden="true" /><input id="contact-name" name="name" value={form.name} onChange={updateField} placeholder={t("enterName")} autoComplete="name" required /></div>
            <label htmlFor="contact-email">{t("emailAddress")}</label>
            <div className="contact-input-wrap"><FaEnvelope aria-hidden="true" /><input id="contact-email" name="email" type="email" value={form.email} onChange={updateField} placeholder={t("emailPlaceholder")} autoComplete="email" required /></div>
            <label htmlFor="contact-message">{t("message")}</label>
            <div className="contact-input-wrap contact-message-wrap"><FaCommentDots aria-hidden="true" /><textarea id="contact-message" name="message" value={form.message} onChange={updateField} placeholder={t("messagePlaceholder")} rows="5" required /></div>
            <button className="contact-submit" type="submit">{t("sendMessage")} <FaPaperPlane /></button>
            <small className="contact-note">{t("emailNote")}</small>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
