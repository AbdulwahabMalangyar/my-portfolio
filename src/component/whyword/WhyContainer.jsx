import "./WhyContainer.css";

function WhyContainer({ title, subtitle, icon }) {
  return (
    <article className="about-info-card">
      <span className="about-info-icon" aria-hidden="true">{icon}</span>
      <div className="about-info-text">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </article>
  );
}

export default WhyContainer;
