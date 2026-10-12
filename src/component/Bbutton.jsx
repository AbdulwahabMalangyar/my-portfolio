import React from 'react'
import "./Bbutton.css"
function Bbutton({title,background,color}) {
  return (
   <button className="button" style={{ backgroundColor: background, color: background === "transparent" ? "var(--heading)" : color }}>
    {title}
    </button>
  )
}

export default Bbutton