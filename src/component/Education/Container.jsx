import "./Container.css";

function Container({ title, subtitle, icon, description, className = "" }) {
  return (
    <article className={`about-info-card ${className}`.trim()}>
      <span className="about-info-icon" aria-hidden="true">{icon}</span>
      <div className="about-info-text">
        <h4>{title}</h4>
        {subtitle && <p className="about-info-subtitle">{subtitle}</p>}
        {description && <p>{description}</p>}
      </div>
    </article>
  );
}

export default Container;
