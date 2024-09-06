// src/components/Quiz.js

import React, { useState } from 'react';
import Question from './Question';
import questions from '../questions';

function Quiz() {
 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isActive,setIsActive] = useState(false);
  const [count,setCount] = useState(0);
  const clickedOption = {
    backgroundColor: isActive ? 'dodgerblue' : 'skyblue'
  };

  const handleOptionClick = (option) => {
    setSelectedOptions(option);
    setIsActive(!isActive);
  };

  const handleNextQuestion = () => {
    setCount(count=>count+1);
    if (selectedOptions === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  return (
    
    <div className='page'>
      <h1>Awesome Quiz Application</h1>
      {showResults ? (
        <div className='score'>
          <h1>You Scored: {score} out of {count}</h1>
          <button onClick={() => window.location.reload()}>Restart Quiz</button>
        </div>
      ) : (
        <div className='question'>
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            number={questions[currentQuestion].number}
            answer={questions[currentQuestion].answer}
            selectedOptions={selectedOptions}
            isClicked={isActive}
            clickedOption={clickedOption}
            handleOptionClick={handleOptionClick}
            
          />
          <button onClick={handleNextQuestion}>Next Que</button>
        </div>
      )}
    </div>
    
  );
}

export default Quiz;
