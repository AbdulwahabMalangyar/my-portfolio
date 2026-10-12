import "./Container.css";

function Container({ Icon, Name, Percent }) {
  const percentage = Math.max(0, Math.min(100, Number(Percent) || 0));

  return (
    <article className="Skill_container">
      <div className="skill-top">
        <span className="skill-icon" aria-hidden="true">{Icon}</span>
        <span className="skill-name">{Name}</span>
        <span className="skill-percent">{percentage}%</span>
      </div>
      <div
        className="skill-progress"
        role="progressbar"
        aria-label={`${Name} proficiency`}
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <span className="skill-progress-fill" style={{ width: `${percentage}%` }} />
      </div>
    </article>
  );
}

export default Container;
