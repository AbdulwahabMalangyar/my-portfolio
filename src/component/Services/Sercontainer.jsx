import "./Sercontainer.css";

function Sercontainer({ icon, header, description }) {
  return (
    <>
      <div className="SerContainer">
        <div className="Icon">{icon}</div>
        <div className="header"><h3>{header}</h3></div>
        <div className="description"><p>{description}</p></div>
      </div>
    </>
  );
}

export default Sercontainer;
