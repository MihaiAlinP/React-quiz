import React from 'react';
import './QuizResult.css';

const QuizResult = ({ score, totalQuestions, onRestart }) => {
  return (
    <div id="quiz-result">
      <h1>Rezultatul Final</h1>
      <h2>
        Ați răspuns corect la {score} din {totalQuestions} întrebări.
      </h2>
      <button className="btn" type="button" onClick={onRestart}>
        Restart
      </button>
    </div>
  );
};

export default QuizResult;