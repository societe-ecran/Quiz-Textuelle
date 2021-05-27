import React from "react";
import dataQuestions from "./dataQuestion";
import Question from "./Question";

function Questions() {

  return (
    <>
      <div className="text-center margin-x-auto spicy text-4xl pt-12 md:pt-24 pb:12 md:pb-24 ">
        Coche 1 réponse au minimum pour chacune des questions. <br />
        2 au maximum. 
      </div>
      <div className='flex justify-center'>
          <a className="distro2 text-6xl pt-6 transform rotate-90 text-center got "href="#0">v</a>
      </div>
      <div>
        {dataQuestions.map((question, i) => {
          return (
            <>
              <div id={i}  key={i} className="md:mx-auto w-6/6 md:w-2/3  lg:w-2/3 xl:w-2/3  mt-64 pt-64 mb-3 ">
                <Question
                  numero={question.numero}
                  question={question.question}
                  reponses={question.reponses}
                  anchor={i+1}
                  key={i}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Questions;
