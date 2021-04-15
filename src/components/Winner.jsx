import React from "react";
import WhoAreYou from "./dataWhoAreYou";
import WhoAreYouCopy from './dataWhoAreYouCopy'
import symboles from "./utils/symboles";
import ScoreCalcul from "./ScoreCalcul";
import "../App.css";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

function Winner() {
    ScoreCalcul()
  const score = ScoreCalcul();
//   const [scale, setScale] = useState("");
  const youAre = [];

  function trie() {
    for (let i = 0; i < WhoAreYou.length; i++) {
      console.log(score[0].symbole);
      console.log(WhoAreYou[i].symbole);
      if (WhoAreYou[i].symbole === score[0].symbole) {
        console.log("trouvé");
        youAre.push(WhoAreYou[i]);
        WhoAreYouCopy.splice(i,1)
        WhoAreYouCopy.forEach((element) => {
          youAre.push(element);
        });
      }
    }
  }
  trie();

  return (
    <>
      <Carousel
        plugins={[
          "centered",
          "infinite",
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
                <div class="bg-white relative shadow-xl w-5/6 md:w-2/3  lg:w-2/3 xl:w-2/3 mx-auto  ">
                  <div class="flex justify-center">
                    <div className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl bg-white">
                      <div
                        className={`${who.taille} 
                       
                        ${
                          i === 0 && "fushia"
                        }`}
                      >
                        {symboles(who.symbole)}
                      </div>
                    </div>
                  </div>
                  <div class="mt-16">
                    <h1
                      className={`${who.font} ${who.tailleTitre} ${
                        i === 0 && "fushia"
                      } text-center px-12 mb-6 fin ml6 `}
                    >
                      {i === 0 ? who.titre : who.titre2}
                    </h1>
                    <div class="w-full px-6 pb-6 text-l">{who.texte}</div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Carousel>
    </>
  );
}

export default Winner;
