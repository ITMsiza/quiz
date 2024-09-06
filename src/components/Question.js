// src/components/Question.js

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Question({ question, options, number, answer,background, selectedOptions, isClicked, clickedOption, handleOptionClick }) {
 
  return (
    <>
      <h2> {number}. {question}</h2>
      {options.map((option, index) => (
        <div style={{ backgroundColor: selectedOptions === option ? '#007bff' : 'skyblue'}}  
        key={index} 
        onClick={() => handleOptionClick(option)}>
          {option} 
        </div>
      ))}
    </>
  );
}

export default Question;
