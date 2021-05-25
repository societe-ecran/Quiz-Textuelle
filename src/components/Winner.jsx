import React from "react";
import WhoAreYou from "./dataWhoAreYou";
import WhoAreYouCopy from "./dataWhoAreYouCopy";
import symboles from "./utils/symboles";
import ScoreCalcul from "./ScoreCalcul";
import "../App.css";
import Carousel, {
  slidesToShowPlugin,
  //  arrowsPlugin
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import figures from "./figures";

function Winner() {
  const score = ScoreCalcul();
  const youAre = [];

  const Figures = figures();
  // function trie() {
  //   for (let i = 0; i < WhoAreYou.length; i++) {
  //     if (WhoAreYou[i].symbole === score[0].symbole) {
  //       console.log(WhoAreYou[i].symbole);  console.log(score[0].symbole)
  //       youAre.push(WhoAreYou[i]);
  //       // WhoAreYouCopy.splice(i,1);
  //     }
  //   }
  //     WhoAreYouCopy.forEach((element) => {
  //         youAre.push(element);
  //       });
  // }

  // trie();

  function cut(who) {
    return who.symbole === score[0].symbole;
  }
  const reste = WhoAreYou.find(cut);
  youAre.push(reste);

  for (let i = 0; i < WhoAreYou.length; i++) {
    if (WhoAreYou[i].symbole === score[0].symbole) {
      WhoAreYouCopy.splice(i, 1);
    }
  }

  WhoAreYouCopy.forEach((element) => {
    youAre.push(element);
  });

  return (
    <>
      {/* <div className="hidden md:inline">
        <Carousel
          plugins={[
            "centered",
            "infinite",
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
          ]}
        >
          {youAre.map((who, i) => {
            return (
              <>
                <div class="container mx-auto my-20  ">
                  <div class="bg-white relative shadow-xl w-5/6 md:w-2/3  lg:w-2/3 xl:w-2/3 mx-auto hover:shadow-2xl ">
                    <div class="flex justify-center">
                      <div className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl bg-white">
                        <div
                          className={`${who.taille} ${i === 0 && "fushia "}`}
                        >
                          {symboles(who.symbole)}
                        </div>
                      </div>
                    </div>
                    <div class="mt-16">
                      <h1
                        className={`${who.font} ${who.tailleTitre} ${
                          i === 0 && " fushia"
                        } text-center px-12 mb-6 fin ml6 `}
                      >
                        {i === 0 ? who.titre : who.titre2}
                      </h1>
                      <div className="w-full px-6 pb-6 text-l">{who.texte}</div>
                      <div className="px-6 font-bold text-center Bubblegum">
                        Pour creuser, rien de mieux qu'une petite biblio. Le pdf
                        du questionnaire est disponible plus bas.
                      </div>
                      <div className="text-center transform rotate-90">
                        <a
                          className="distro2 text-6xl pt-6  text-center got "
                          href="#suite"
                        >
                          v
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Carousel>
      </div> */}

      {/* version pc */}
      <div className=" hidden md:inline backdrop-opacity-0">
        <div class="container mx-auto mt-20 mb-8 ">
          <div class="bg-opacity-0 relative shadow-xl mx-auto pt-3 ">
            <div class="flex justify-center">
              <div className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl bg-white">
                <div className={`${youAre[0].taille} fushia `}>
                  {symboles(youAre[0].symbole)}
                </div>
              </div>
            </div>
            <div>
              <div
                className={`${youAre[0].font} ${youAre[0].tailleTitreSmart} px-3 pt-14 fushia text-center mb-6 `}
              >
                {youAre[0].titre}
              </div>
              <div className="w-full px-6 pb-6 text-md">{youAre[0].texte}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:inline">
        <div className="  px-6 font-bold text-center Bubblegum">
          Decouvres les autres figures du quiz.
        </div>
        <div className="text-center transform rotate-90">
          <a
            className="distro2 text-6xl pt-6  text-center got "
            href="#figures"
          >
            v
          </a>
        </div>
      </div>

      {/* version smartphone

      <div className=" md:hidden backdrop-opacity-0">
        <div class="container mx-auto mt-6  ">
          <div class=" relative shadow-xl mx-auto pt-3 ">
            <div class="flex justify-center">
              <div className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl ">
                <div className={`${youAre[0].taille} fushia `}>
                  {symboles(youAre[0].symbole)}
                </div>
              </div>
            </div>
            <div className="">
              <div
                className={`${youAre[0].font} ${youAre[0].tailleTitreSmart} px-3 pt-14 fushia text-center mb-6 `}
              >
                {youAre[0].titre}
              </div>
              <div className="w-full px-6 pb-6 text-md">{youAre[0].texte}</div>
              <div className="">
                <div className="  px-6 font-bold text-center Bubblegum">
                  Decouvres les autres figures du quiz.
                </div>
                <div className="text-center transform rotate-90">
                  <a
                    className="distro2 text-6xl pt-6  text-center got "
                    href="#figures"
                  >
                    v
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div id="figures" className=" mt-44 pt-24">
        {Figures}
      </div>
    </>
  );
}

export default Winner;
