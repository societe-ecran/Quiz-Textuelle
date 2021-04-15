import React from "react";
import dataQuestions from "./dataQuestion";
import Question from "./Question";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

function Questions(props) {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <>
      {/* <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -3000))}> */}
      <div className="text-center margin-x-auto spicy text-4xl pt-24 pb-24 ">
        Coche 1 réponse au minimum pour chacune des questions. <br />2 au
        maximum. 
        {/* <div className="distro2 text-6xl pt-6 transform rotate-90 "> */}
         
          
          {/* </div> */}
      </div>
      <div className='flex justify-center'>
          <a className="distro2 text-6xl pt-6 transform rotate-90 text-center got "href="#0">v</a>
      </div>
    
      {/* </Animator>
      </ScrollPage> */}

      <div>
        {dataQuestions.map((question, i) => {
          return (
            <>
              {/* <ScrollPage page={i + 1}>
                <Animator
                  animation={batch(Fade(0), Sticky(), MoveOut(0, -3000))}
                > */}
              <div id={i } className="text-center margin-auto mt-64 pt-64">
                <Question
                  numero={question.numero}
                  question={question.question}
                  reponses={question.reponses}
                  anchor={i+1}
                />
              </div>
              {/* </Animator>
              </ScrollPage> */}
            </>
          );
        })}
      </div>
      {/* </ScrollContainer> */}
    </>
  );
}

export default Questions;
