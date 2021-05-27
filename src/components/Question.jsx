import React, { useContext } from "react";
import Reponse from "./Reponse";
import UserContext from "./utils/UserContext";
import { useHistory } from "react-router-dom";

function Question(props) {
  const history = useHistory();
  let choice = [];
  const choiceTable = useContext(UserContext);
  var addChoice = (symbole) => {
    choice.push(symbole);
    choiceTable.push(symbole);

  };

  var deleteChoice = (symbole) => {
    let indice = choice.indexOf(symbole);
    let indiceTable = choiceTable.indexOf(symbole);
    choice.splice(indice, 1);
    choiceTable.splice(indiceTable, 1);

  };

  var souvenirParent = (symboleName) => {
    handleClick(symboleName);
  };

  var souvenirParentDelete = (symboleName) => {
    handleClickDelete(symboleName);
  };

  const handleClick = (symbole) => {
    if (choice.length < 2) {
      addChoice(symbole);
    }
  };

  const handleClickDelete = (symbole) => {
    deleteChoice(symbole);
  };

  const finish = () => {
    history.push("/endGame");
  };

  const playAgain = () => {
    window.location.reload();
  };

  return (
    <div className="mb-12">
      <div className="flex justify-center">
        <div className="spicy text-2xl md:text-3xl">{`${
          props.numero + " "
        } `}</div>
        <div className="spicy text-2xl md:text-3xl md:ml-1">
          {props.question}
        </div>
      </div>

      <div className="">
        {props.reponses.map((reponse) => {
          return (
            <>
              <Reponse
                handleClickParent={souvenirParent}
                handleClickParentDelete={souvenirParentDelete}
                text={reponse.texte}
                symbole={reponse.symbole}
                choice={choice}
                taille={reponse.taille}
              />
            </>
          );
        })}
      </div>
      <div className="flex justify-center">
        {props.numero !== "4. " && (
          <a
            className="distro2 text-6xl pt-6 transform rotate-90 got "
            href={`#${props.anchor}`}
          >
            v
          </a>
        )}
      </div>

      {props.numero === "4. " && (
        <div
          className={`flex justify-center items-center text-2xl md:text-4xl titre transform -skew-y-6 pt-8 md:pt-24`}
        >
          <button onClick={() => finish()} className="mr-6 but">
            Valider le quiz
          </button>
          <button onClick={() => playAgain()} className="ml-6  but">
            <a className="" href="#top">
              Rejouer
            </a>
          </button>
        </div>
      )}
    </div>
  );
}

export default Question;
