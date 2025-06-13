'use client';

import { QuestionAndAnswer2 } from '@/types/answer';
import { useRouter } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';

const QuestionAnswer = ({ questions }: { questions: QuestionAndAnswer2[] }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + (selectedAnswer ? 1 : 0)) / totalQuestions) * 100;

  useEffect(() => {
    if (!startTime) setStartTime(Date.now());
  }, []);

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);
    const isCorrect = answer === currentQuestion.correctAnswer;

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setEndTime(Date.now());
      setShowResults(true);
    }
  };

  const allAnswers = useMemo(() => {
    return [
      currentQuestion.correctAnswer,
      ...currentQuestion.incorrectAnswers,
    ].sort(() => Math.random() - 0.5);
  }, [currentQuestion]);

  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const xp = Math.floor(percentage / 10) * 10;
  const timeTaken = endTime && startTime ? Math.round((endTime - startTime) / 1000) : 0;

   const router = useRouter();

  return (
    <div className="p-4 max-w-md mx-auto relative min-h-screen">
      {/* Barra de Progresso */}
      <div className="w-full bg-white h-2 rounded-full mb-6 overflow-hidden mb-48">
        <div
          className="bg-green-400 h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <h2 className="text-xl font-semibold mb-4 text-center">{currentQuestion.question}</h2>

      <div className="flex flex-col gap-2">
        {allAnswers.map((answer, index) => {
          const isSelected = selectedAnswer === answer;
          const isCorrect = answer === currentQuestion.correctAnswer;
          let buttonStyle = "py-2 px-4 rounded-full border shadow-sm transition-colors text-black";

          if (selectedAnswer) {
            buttonStyle += isCorrect
              ? " bg-green-200 border-green-500"
              : isSelected
              ? " bg-red-200 border-red-500"
              : " bg-gray-100 border-gray-300";
          } else {
            buttonStyle += " bg-white border-gray-300 hover:bg-blue-100";
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswerClick(answer)}
              className={buttonStyle}
              disabled={!!selectedAnswer}
            >
              {answer}
            </button>
          );
        })}
      </div>

      <div className="mt-4 text-center flex flex-col items-center">
        <button
          onClick={handleNext}
          className={`px-6 py-2 rounded-full w-full ${
            selectedAnswer === null
              ? "text-gray-500 bg-gray-700"
              : "bg-main-blue text-white"
          } font-semibold transition-colors`}
          disabled={selectedAnswer === null}
        >
          Próximo
        </button>
      </div>

      {/* Card Final */}
      {showResults && (
        <div className="absolute bottom-0 left-0 w-full h-[40%] bg-second border-t border-gray-300 shadow-xl p-6 flex flex-col items-center justify-center z-50">
          <h2 className="text-2xl font-bold mb-2 text-green-600">Fase Concluída!</h2>
          <p className="text-lg mb-1">🎯 Porcentagem de acerto: <strong>{percentage}%</strong></p>
          <p className="text-lg mb-1">⚡ XP ganho: <strong>{xp} XP</strong></p>
          <p className="text-lg">⏱️ Tempo: <strong>{timeTaken} segundos</strong></p>
          <button className='bg-green-700 w-full mt-24 text-white' onClick={() => router.push("/levels")}>
            Finalizar
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionAnswer;
