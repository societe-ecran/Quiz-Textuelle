import React, { useState } from "react";
import symboles from "./utils/symboles";
import { motion } from "framer-motion";
import "../App.css";


function Reponse(props) {
  const [color, setColor] = useState("#000000");
  const [selected, setSelected] = useState(false);
  
  const handleClick = () => {
    if (selected === false && props.choice.length < 2) {
      setSelected(true);
      setColor("#ff1493");
      props.handleClickParent(props.symbole);
    } else if (selected === true) {
      setSelected(false);
      setColor("#000000");
      props.handleClickParentDelete(props.symbole);
    }
  };

  return (
    <div className="flex justify-center  mb-2 items-center">
      <div
        style={{ color }}
        onClick={() => handleClick()}
        className={`${props.taille} mr-3 symbole`}
      >
        {symboles(props.symbole)}
      </div>
      <div className="text-left">{props.text}</div>
    </div>
  );
}

export default Reponse;
