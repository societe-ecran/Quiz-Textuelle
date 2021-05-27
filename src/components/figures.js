import React from 'react'
import WhoAreYou from "./dataWhoAreYou";
import symboles from "./utils/symboles";
import "../App.css";
import Carousel, {
  slidesToShowPlugin,
  //  arrowsPlugin
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default function figures() {
    return (
        <>

{/* version pc */}

              <div className="hidden md:inline">
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
          {WhoAreYou.map((who, i) => {
            return (
              <>
                <div class="container mx-auto my-20  ">
                  <div class="bg-white relative shadow-xl w-5/6 md:w-2/3  lg:w-2/3 xl:w-2/3 mx-auto hover:shadow-2xl ">
                    <div class="flex justify-center">
                      <div className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl bg-white">
                        <div
                          className={`${who.taille} `}
                        >
                          {symboles(who.symbole)}
                        </div>
                      </div>
                    </div>
                    <div class="mt-16">
                      <h1
                        className={`${who.font} ${who.tailleTitre} 
                        text-center px-12 mb-6 fin ml6 `}
                      >
                        {who.titre2}
                      </h1>
                      <div className="w-full px-6 pb-6 text-l">{who.texte}</div>
                      <div className="px-6 font-bold text-center Bubblegum">
                        Pour creuser, rien de mieux qu'une petite biblio. 
                        Le pdf du questionnaire est disponible plus bas.
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
      </div>



{/* version smartphone

      <div className=" md:hidden">
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
          {WhoAreYou.map((who, i) => {
            return (
              <>
                <div class="container mx-auto my-20  ">
                  <div class="bg-white relative shadow-xl w-5/6 md:w-2/3  lg:w-2/3 xl:w-2/3 mx-auto hover:shadow-2xl ">
                    <div class="flex justify-center">
                      <div className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl bg-white">
                        <div
                          className={`${who.taille} `}
                        >
                          {symboles(who.symbole)}
                        </div>
                      </div>
                    </div>
                    <div class="mt-16">
                      <h1
                        className={`${who.font} ${who.tailleTitre} 
                        text-center px-12 mb-6 fin ml6 `}
                      >
                        {who.titre2}
                      </h1>
                      <div className="w-full px-6 pb-6 text-l">{who.texte}</div>
                      <div className="px-6 font-bold text-center Bubblegum">
                        Pour creuser, rien de mieux qu'une petite biblio. 
                        Le pdf du questionnaire est disponible plus bas.
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

      </>


    )
}
