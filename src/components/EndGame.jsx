import React, { useState, useContext, useEffect } from "react";
import UserContext from "./utils/UserContext";
import anime from "animejs/lib/anime.es.js";
import Winner from "./Winner";
import { Ellipsis } from "react-spinners-css";
import { useHistory } from "react-router-dom";
import pdf from '../images/guide.pdf'
// import { useWindowSize } from 'react-use'
// import Confetti from 'react-confetti'
import Confetti from 'react-dom-confetti';

function EndGame() {
  const choiceTable = useContext(UserContext);
  const [scoreVisibility, setScoreVisibility] = useState("block");
  const [whoVisibility, setWhoVisibility] = useState("hidden");
  const [confetti, setconfetti] = useState(false)
  const history = useHistory();
  var smile = 0;
  var peace = 0;
  var feuille = 0;
  var diams = 0;

  const EtleWinnerIs=Winner()

  for (let i = 0; i < choiceTable.length; ++i) {
    switch (choiceTable[i]) {
      case "smile":
        smile++;
        break;
      case "peace":
        peace++;
        break;
      case "feuille":
        feuille++;
        break;
      case "diams":
        diams++;
        break;
        default :
        console.log("")
    }
  }

  useEffect(() => {
    anime
      .timeline({ loop: false })
      .add({
        targets: ".ml6 .letter",
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i,
      })
      .add({
        targets: ".ml6",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 2000,
      });

    const timer = setTimeout(() => {
      setScoreVisibility("hidden");
      setWhoVisibility("block");
      setconfetti(true)
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const playAgain=()=>{
history.push("/")

  }

  const config = {
    angle: "90",
    spread: 360,
    startVelocity: 60,
    elementCount: "500",
    dragFriction: 0.12,
    duration: "6520",
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

  return (
    <div className="body">
      <div
        className={`${scoreVisibility} ml6 flex justify-center mt-24 items-center `}
      >
        <span class="text-wrapper text-4xl">
          {/* <span class="letter spicy">T</span>{" "}
          <span class="letter spicy">u</span> <span class="letter spicy"></span>{" "}
          <span class="letter spicy">a</span>{" "}
          <span class="letter spicy">s</span> <span class="letter spicy"></span>
          <span class="letter spicy">:</span>
          <br /> */}
          <span class="letter spicy">{smile}</span>{" "}
          <span className="letter distro2 text-2xl">a</span>
          <br />
          <span class="letter spicy">{peace}</span>{" "}
          <span className="letter distro2 text-2xl">s</span>
          <br />
          <span class="letter spicy">{feuille}</span>{" "}
          <span className="letter wmshapes text-2xl">y</span>
          <br />
          <span class="letter spicy">{diams}</span>{" "}
          <span className="letter wmshapes text-2xl">o</span>
          <br />
          <Ellipsis color="black" />
        </span>
      </div>

      <div className={`${whoVisibility} `}>
      {/* <Confetti
      recycle={true}
      numberOfPieces={500}
      run={true}
      wind={0.05}
      // width={width}
      // height={height}
    /> */}

<div className="flex justify-center z">
  <Confetti active={confetti } config={ config }/>
</div>

<div className='z2'>
   {EtleWinnerIs}
</div>
       

        <div className=" mx-auto pt-12 w-5/6 md:w-2/3  lg:w-2/3 xl:w-2/3 text-2xl transform -skew-y-6 ">
          <div className="Bubblegum">
            Nous considerons que le feminisme carceral et le reformisme sont des
            impasses politiques. la police et le systeme judiciaire sont des
            institutions intrinsequement patriarcales, racistes et au service du
            liberalisme. Pour nous, les luttes feministes sont indissociables
            des luttes decoloniales et anticapitalistes. S' il n’y a pas de
            choix moral a trancher entre l’autodefense et la construction d’un
            processus de justice transformatrice, ceci reste une affaire de
            situation.
          </div>
          <div className="wmshapes text-right flex justify-end pt-3">
            v <div className="Fighting pl-2">GROS KISS</div>
          </div>
          <div className="Feeling text-right pt-2 text-4xl">Textuelles</div>
          <div className=" text-right text-sm">textuelles@riseup.net </div>
        </div>

        <div className=" mx-auto w-5/6 md:w-2/3  lg:w-2/3 xl:w-2/3 ">
          <div className="Filxgirl text-4xl  pt-24">BIBLIOGRAPHIE</div>

          <div className="text-l mb-12">
            <span className="font-bold">DORLIN Elsa</span>,{" "}
            <span className="italic">
              Se défendre, pour une philosophie de la violence
            </span>
            , Paris, éditions La Découverte, 2017.
            <br />
            <span className="font-bold">FARIS Sarah</span>,
            <span className="italic">
              {" "}
              « Néolibéralisme, femmes migrantes et marchandisation du care »
            </span>
            , Vacarme 2013/4 (N° 65), pages 107 à 116 et{" "}
            <span className="italic">
              « Les fondements politico-économiques du fémonationalisme »
            </span>
            , Contretemps, 2013.
            <br />
            <span className="font-bold">GILMORE Ruth Wilson</span>,
            <span className="italic">
              {" "}
              Gulag: Prisons, Surplus, Crisis, and Opposition in Globalizing
              California
            </span>{" "}
            Golden , University of California Press, 2007 et{" "}
            <span className="italic">
              Change Everything: Racial Capitalism and the Case for Abolition
            </span>
            , Haymarket Books, 2021.
            <br />
            <span className="font-bold">KABA Mariame</span>,{" "}
            <span className="italic">
              We do this till we free us : abolitionist organizing and
              transforming justice
            </span>
            , Tamara K. Nopper, 2021.
            <br />
            <span className="font-bold">VERGÈS Françoise</span>,
            <span className="italic">
              Le ventre des femmes, Capitalisme, racialisation, féminisme
            </span>{" "}
            , Albin Michel, 2016 et
            <span className="italic">
              Une théorie féministe de la violence, Pour une politique
              antiraciste de la protection
            </span>
            , Paris, La Fabrique, 2020.
            <br />
            <span className="font-bold">WANG Jackie</span>,{" "}
            <span className="italic">Capitalisme carcéral</span>, Paris,
            éditions Divergences, 2020.
            <br />
            <span className="font-bold">ZAHAVI Helen</span>,
            <span className="italic">Dirty week end</span> , Libretto, 2019.
            <br />
          </div>
        </div>

        <div
          className={`flex justify-center items-center pr-6 text-4xl titre transform -skew-y-6 pt-24`}
        >
          <button onClick={() => playAgain()} className="pr-6  but">
            <a className="" href="#top">
              Rejouer
            </a>
          </button>

          <button className="pl-12 but">
            <a className="" href={pdf}>
              Télécharger le Quizz
            </a>
          </button>
        </div>

        <div className="flex justify-center pt-12 pb-6">
          Made with
          <div className="wmshapes text-red-600  pl-1 pr-1">{" v "}</div>
          <span>{" by {Société Ecrans}"}</span>
        </div>
      </div>
    </div>
  );
}

export default EndGame;
