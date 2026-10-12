import "./Container.css";

function Container({ title, subtitle, icon }) {
  return (
    <div className="about-info-card">
      <span className="about-info-icon" aria-hidden="true">{icon}</span>
      <div className="about-info-text">
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default Container;
