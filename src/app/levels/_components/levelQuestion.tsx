'use client';

import { QuestionAndAnswer2 } from '@/types/answer';
import React, { useState } from 'react';

const QuestionAnswer = (questions: QuestionAndAnswer2[]) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (answer: string) => {
    // Verifica se a resposta do usuário está correta
    if (answer === currentQuestion.correctAnswer) {
      setIsAnswerCorrect(true);
      // Avançar para a próxima pergunta após um curto delay
      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setIsAnswerCorrect(null);
        } else {
          alert("Parabéns, você terminou o quiz!");
        }
      }, 500); // Delay de 500ms para dar tempo de mostrar a resposta
    } else {
      setIsAnswerCorrect(false);
    }
  };

  // Embaralha as respostas (correct + incorrect)
  const allAnswers = [
    currentQuestion.correctAnswer,
    ...currentQuestion.incorrectAnswers
  ].sort(() => Math.random() - 0.5);

  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      <div>
        {allAnswers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswerClick(answer)}>
            {answer}
          </button>
        ))}
      </div>

      {isAnswerCorrect !== null && (
        <div>
          {isAnswerCorrect ? (
            <p style={{ color: 'green' }}>Resposta correta! Avançando para a próxima...</p>
          ) : (
            <p style={{ color: 'red' }}>Resposta incorreta. Tente novamente.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionAnswer;
