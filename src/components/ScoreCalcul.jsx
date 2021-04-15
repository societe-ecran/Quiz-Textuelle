import {useContext} from 'react'
import UserContext from "./utils/UserContext";

function ScoreCalcul() {
    const choiceTable = useContext(UserContext);
    var smile = 0;
    var peace = 0;
    var feuille = 0;
    var diams = 0;
    // const youAre = [];
    // const tableScore = [
    //   { symbole: 'diams', score: 0 },
    //   { symbole: 'peace', score:0 },
    //   { symbole: 'feuille', score:0 },
    //   { symbole: 'smile', score:0 },
    // ];
    console.log(choiceTable)
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
          default:
            console.log("")
      }
    }
  
    const tableScore = [
      { symbole: 'diams', score: diams },
      { symbole: 'peace', score:peace },
      { symbole: 'feuille', score:feuille },
      { symbole: 'smile', score:smile },
    ];
  

  const result = tableScore.sort(function (a, b) {
      return b.score - a.score ;
    });
  

  //   for (let i = 0; i < WhoAreYou.length; i++) {
  //   if (WhoAreYou[i].symbole === result[0].symbole ) {
  //     console.log("trouvé");
  //     youAre.push(WhoAreYou[i]);
  //   }
  // }



    return    result
}

export default ScoreCalcul
