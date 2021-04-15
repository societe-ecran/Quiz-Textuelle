import React from "react";
import "../../App.css";

function symboles(symbole) {
  switch (symbole) {
    case "diams":
      return <div className="wmshapes ">o</div>;
    case "peace":
      return <div className="distro2">s</div>;
    case "smile":
      return <div className="distro2">a</div>;
    case "feuille":
      return <div className="wmshapes">y</div>;
    
    default:
      return symbole;
  }
}

export default symboles;
