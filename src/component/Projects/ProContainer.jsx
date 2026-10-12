import "./ProContainer.css";
import Bbutton from "../Bbutton.jsx";

function ProContainer({ Img_url, title, description, tools, btn_url, btn_name, btn_bgcolor, btn_color }) {
  return (
    <article className="pro_container">
      <div className="pro_top">
        <img src={Img_url} alt={`${title} project preview`} loading="lazy" />
      </div>

      <div className="pro_bbttom">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <p className="tools">{tools}</p>
        {btn_url ? (
          <a href={btn_url} target="_blank" rel="noreferrer" className="project-link">
            <Bbutton title={btn_name} background={btn_bgcolor} color={btn_color} />
          </a>
        ) : (
          <Bbutton title={btn_name} background={btn_bgcolor} color={btn_color} />
        )}
      </div>
    </article>
  );
}

export default ProContainer;
