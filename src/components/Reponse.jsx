import React, { useState } from "react";
import symboles from "./utils/symboles";
import "../App.css";
import useSound from 'use-sound';
import Poof from "../images/Poof.mp3"

function Reponse(props) {
  const [color, setColor] = useState("#000000");
  const [selected, setSelected] = useState(false);
  const [play] = useSound(Poof);

  const handleClick = () => {
    if (selected === false && props.choice.length < 2) {
      setSelected(true);
      setColor("#ff1493");
      props.handleClickParent(props.symbole);
      play()
    } else if (selected === true) {
      setSelected(false);
      setColor("#000000");
      props.handleClickParentDelete(props.symbole);
      play()
    }
  };

  return (
    <div className="flex mt-3 mb-2 items-center text-left">
      <div>
        
      </div>
      <div
        style={{ color }}
        onClick={() => handleClick()}
        className={`${props.taille} mr-3 symbole`}
      >
        {symboles(props.symbole)}
      </div>
      <div className="text-left text-sm">{props.text}</div>
    </div>
  );
}

export default Reponse;
