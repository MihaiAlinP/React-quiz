import React, { useState } from 'react';
import QuizResult from './components/QuizResult';
import { quizData } from './components/questions'; 
import './App.css';


function App() {
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleButtonClick = (questionIndex, choiceId) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = choiceId;
    setUserAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((question, index) => {
      const userChoiceId = userAnswers[index];
      const correctChoice = question.choices.find((choice) => choice.isCorrect);

      if (userChoiceId === correctChoice.id) {
        score += 1;
      }
    });
    return score;
  };

  const handleFinishClick = () => {
    setShowResults(true);
  };

  const handleRestartClick = () => {
    setShowResults(false);
    setUserAnswers(Array(quizData.length).fill(null));
  };

  return (
    <form>
      <div className="Quiz-container">
        <h1 id="title">Quiz Cultura Generala</h1>

        {quizData.map((question, questionIndex) => (
          <div key={questionIndex} className="question-container">
            <h3>{question.question}</h3>
            <ul>
              {question.choices.map((choice) => (
                <li key={choice.id}>
                  <button
                    className={`answer-button ${userAnswers[questionIndex] === choice.id ? 'checked' : ''}`}
                    type="button"
                    onClick={() => handleButtonClick(questionIndex, choice.id)}
                  >
                    {choice.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {showResults ? (
          <QuizResult score={calculateScore()} totalQuestions={quizData.length} onRestart={handleRestartClick} />
        ) : (
          <button className="finish" type="button" onClick={handleFinishClick}>
            Finalizare
          </button>
        )}
      </div>
    </form>
  );
}

export default App;
