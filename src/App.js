import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Questions from "./components/Questions";
import anime from "animejs/lib/anime.es.js";
import coueurplanete from "./images/coeurplanete.png";
import etoiles from "./images/etoiles.jpg";
import UserContext from './components/utils/UserContext'


function App() {
  // const [display, setDisplay] = useState("invisible");
  const [headerVisibility, setheaderVisibility] = useState("block");
  const [questionsVisibility, setquestionsVisibility] = useState("hidden");
  // const [play, setPlay] = useState("");
  const choiceTable = useContext(UserContext)
  console.log(choiceTable)

  useEffect(() => {
    // setDisplay("block");
    setquestionsVisibility("hidden");
    anime
      .timeline({ loop: false })
      .add({
        targets: ".word",
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 600,
        delay: (el, i) => 600 * i,
      })
      .add({
        targets: ".fin",
        scale: [14, 1],
        opacity: [0, 1],
        duration: 400,
        easing: "easeOutExpo",
        delay: 1400,
      })
      .add({
        targets: ".encore",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 1600,
        delay: 1600,
      })
      .add({
        targets: ".imageMove",
        scale: [1, 1.1, 1],
        easing: "easeOutCirc",
        duration: 600,
        delay: 1400,
      });
  }, []
  // play 
  );

  const handleClick = () => {
    setquestionsVisibility("block");
    setheaderVisibility("hidden");
  };

  return (
    <>
      <div className={`${headerVisibility}`}>
        <div id="top" className="flex justify-center mt-24">
          <div className="transform -skew-y-6">
            <img
              src={etoiles}
              alt="etoiles"
              className="encore imageMove pt-32 etoiles "
            />
          </div>
          <button></button>

          <div className="text-6xl uppercase text-center margin-auto titre  transform -skew-y-6 ">
            <span className=" word">MARLENE</span> <br />
            <span className="word">SCHIAPPA, BELLA,</span>
            <br />
            <span className="word"> CHRISTIANE TAUBIRA,</span> <br />
            <span className="word">MARIAME KABA :</span> <br />
            <span className="fin">MEME COMBAT ?</span>
          </div>
          <div>
            <img
              src={coueurplanete}
              alt="planete"
              className="encore imageMove"
            />
          </div>
        </div>

        <div className="flex justify-center shadow-lg  transform -skew-y-6">
          <div className=" text-l ">
            <div className="encore spicy text-3xl imageMove ml-24  pt-2 pb-6">
              Répond à notre test et découvre les liaisons plus ou moins
              dangereuses
              <br />
              que ton féminisme entretient avec la police, l'Etat et la justice.
              <br />
            
            </div>
          </div>
        </div>

        <div className="flex justify-center text-4xl titre transform -skew-y-6 pt-24 ">
          <button onClick={() => handleClick()} className="encore imageMove go ">
            GO !
          </button>
     
        </div>
      </div>

      <div className=
      {`${questionsVisibility}`}
      >
        <div className="mt-24 mx-12">

          <Questions />
        </div>
      </div>
    </>
  );
}

export default App;
