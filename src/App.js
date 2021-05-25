import React, { useState, useEffect } from "react";
import Questions from "./components/Questions";
import anime from "animejs/lib/anime.es.js";
import coueurplanete from "./images/coeurplanete.png";
import etoiles from "./images/etoiles.jpg";
import "./App.css";

function App() {
  const [headerVisibility, setheaderVisibility] = useState("block");
  const [questionsVisibility, setquestionsVisibility] = useState("hidden");
  const [showModal, setShowModal] = useState(false);

  useEffect(
    () => {
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
    },
    []
    // play
  );

  const handleClick = () => {
    setquestionsVisibility("block");
    setheaderVisibility("hidden");
  };

  return (
    <div className="body">
      <div className={`${headerVisibility}`}>
        <div id="top" className="flex justify-center mt-12 md:mt-24">
          <div className="transform -skew-y-6">
            <img
              src={etoiles}
              alt="etoiles"
              className="encore imageMove pt-32 etoiles "
            />
          </div>
          <button></button>

          <div className="text-3xl md:text-6xl uppercase text-center margin-auto titre  transform -skew-y-6 ">
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
              className="encore imageMove planete"
            />
          </div>
        </div>

        <div className="flex justify-center shadow-lg  transform -skew-y-6 ">
          <div className=" text-l ">
            <div className="encore spicy text-xl mx-3 md:text-3xl imageMove md:ml-24  pt-2 pb-6">
              Réponds à notre test et découvre les liaisons plus ou moins
              dangereuses
              <br className="hidden md:inline" />
              que ton féminisme entretient avec la police, l'Etat et la justice.
              <br />
            </div>
          </div>
        </div>

        {/* version pc */}
        <div className="hidden md:flex justify-center text-4xl titre transform -skew-y-6 pt-8 md:pt-24 ">
          <button
            onClick={() => setShowModal(true)}
            className="encore imageMove go "
          >
            UN MOT D'INTRO
          </button>
          <button
            onClick={() => handleClick()}
            className=" pl-6 md:pl-12 encore imageMove go "
          >
            GO !
          </button>
        </div>
      </div>

      {/* version smartphone */}

<div className={`${headerVisibility}`}>


      <div className="flex  md:hidden justify-center text-4xl titre transform -skew-y-6 pt-8  ">
        <button
          onClick={() => setShowModal(true)}
          className="encore imageMove go "
        >
          UN MOT D'INTRO
        </button>
      </div>

      <div className="flex  md:hidden justify-center text-4xl titre transform -skew-y-6 pt-8 pb-64 ">
        <button
          onClick={() => handleClick()}
          className=" pl-6 md:pl-12 encore imageMove go "
        >
          GO !
        </button>
      </div>
</div>
      {showModal ? (
        <>
          <div className="justify-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none">
                <button
                  className=" go ml-auto float-right text-3xl font-semibold pr-3 pt-3 "
                  onClick={() => setShowModal(false)}
                >
                  <div className="  h-6 w-6 text-3xl pr-6 block outline-none focus:outline-none">
                    ×
                  </div>
                </button>

                <div className="relative pt-3  px-6 flex-auto">
                  <div>
                    <p className="italic font-semibold text-center">
                      Tu préfères : participer à une manifestation féministe où
                      personne ne déteste la police ou participer à une
                      manifestation où personne n’est féministe ?
                    </p>
                    <br />
                    <p>
                      L’instrumentalisation du féminisme à des fins sécuritaires
                      et racistes colore fortement les débats sur les violences
                      faites aux femmes. Les discours les plus médiatiques et
                      proches du pouvoir entretiennent opportunément la
                      confusion. Malgré le récent mouvement contre les violences
                      policières qui a gagné la France après Black Lives Matter
                      aux États-Unis, les questions sur la police et la justice
                      ne sont pas assez visibles lors de la grande marche du 8
                      mars. Or, il semble nécessaire d’affermir des perspectives
                      féministes qui questionnent la place de l’État et de la
                      police dans nos vies. C’est même indispensable si l’on
                      entend défendre une position féministe décoloniale et
                      antiraciste conséquente. D’autant plus que des autrices
                      francophones, comme le collectif Mwa-Si, Elsa Dorlin ou
                      encore Françoise Vergès ont fourni ces dernières années
                      des idées capables de bouleverser nos grilles de lecture
                      du monde et de construire un féminisme anti-sécuritaire et
                      anti-pénal.
                    </p>
                    <br />
                    <p>
                      Cette année, nous avons donc saisi l’occasion depuis notre
                      modeste groupe de lectures féministes pour faire la
                      jonction entre la lutte féministe et les luttes pour
                      l’abolition de la police. Nous avons rédigé et distribué
                      un tract, le psycho-test parodique qui suit, lors de la
                      manifestation pour les Droits des femmes de mars 2021 à
                      Lyon. Le parti-pris de l’autodérision et la caricature des
                      « familles féministes » permettent de forcer le trait et
                      de faire apparaître de manière saillante les ramifications
                      de nos réflexes quotidiens, pour demander : dans quels
                      camps politiques s’inscrivent-ils ? Quels en sont les
                      effets ?
                    </p>
                    <br />
                    De l’humour donc, avec le recul sur soi que cela permet ; il
                    ne s’agit pas de dicter le bien et le mal en toutes
                    circonstances. Ce test est plutôt un outil de rencontres,
                    d’échanges, de discussions et nous espérons que d’autres se
                    l’approprient, l’enrichissent ou le détournent encore et
                    encore ! Il s’agit aussi pour nous de partager des
                    ressources afin de faire naître du débat politique.
                  </div>
                  <div className="transform -skew-y-6 pt-6">
                    <div className="Feeling text-right pt-6 fushia text-3xl md:text-4xl">
                      Textuelles
                    </div>
                    <div className=" text-right text-sm">
                      textuelles@riseup.net{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div className={`${questionsVisibility}`}>
        <div className="mt-24 mx-3 md:mx-12">
          <Questions />
        </div>
      </div>
    </div>
  );
}

export default App;
