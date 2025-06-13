'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { QuestionAndAnswer2 } from "@/types/answer";
import QuestionAnswer from "../_components/levelQuestion";
import { Header } from "@/app/components/header";

const questions: QuestionAndAnswer2[] = [
  {
    question: "Qual é a fórmula para calcular a área de um círculo?",
    correctAnswer: "Área = π × raio²",
    incorrectAnswers: [
      "Área = π × diâmetro²",
      "Área = 2 × π × raio",
      "Área = diâmetro ÷ 2 × π"
    ]
  },
  {
    question: "Se o raio de um círculo é 7 cm, qual é sua área? (Use π ≈ 3,14)",
    correctAnswer: "153,86 cm²",
    incorrectAnswers: ["49 cm²", "100 cm²", "314 cm²"]
  },
  {
    question: "O que é o diâmetro de um círculo?",
    correctAnswer: "O dobro do raio.",
    incorrectAnswers: [
      "A metade do raio.",
      "A circunferência total.",
      "O espaço entre dois raios."
    ]
  },
  {
    question: "Qual a fórmula para calcular a circunferência de um círculo?",
    correctAnswer: "C = 2 × π × raio",
    incorrectAnswers: [
      "C = π × raio²",
      "C = π ÷ raio",
      "C = diâmetro ÷ π"
    ]
  },
  {
    question: "Se o diâmetro de um círculo é 10 cm, qual é o raio?",
    correctAnswer: "5 cm",
    incorrectAnswers: ["10 cm", "2,5 cm", "20 cm"]
  }
];

const CircleLevel = () => {
  const router = useRouter();
  const [showExplanation, setShowExplanation] = useState(true);

  const handleStart = () => {
    setShowExplanation(false);
  };

  return (
    <div className="">
      <div className="mt-4" onClick={() => router.back()}>
        <Header />
      </div>

      {showExplanation ? (
        <div className="mt-6 max-w-2xl mx-4 bg-white text-black p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Entendendo os Círculos</h2>
          <p className="mb-2">
            Um <strong>círculo</strong> é uma figura plana formada por todos os pontos que estão à mesma distância de um ponto central chamado <strong>centro</strong>.
          </p>
          <p className="mb-2">
            O <strong>raio</strong> é a distância do centro até a borda, e o <strong>diâmetro</strong> é o dobro do raio.
          </p>
          <p className="mb-2">
            A <strong>circunferência</strong> é o perímetro do círculo e pode ser calculada com:
            <br />
            <code>C = 2 × π × raio</code>
          </p>
          <p className="mb-2">
            A <strong>área</strong> é calculada com:
            <br />
            <code>Área = π × raio²</code>
          </p>
          <p className="mb-4">
            Exemplo: se o raio for 7 cm, então:
            <br />
            Área = 3,14 × 7² = 3,14 × 49 = <strong>153,86 cm²</strong>
          </p>

          {/* SVG ilustrativo */}
          <div className="my-6 flex justify-center">
            <svg width="200" height="200" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="90" stroke="black" strokeWidth="2" fill="#e0f7fa" />
              <line x1="100" y1="100" x2="100" y2="10" stroke="red" strokeWidth="2" />
              <line x1="10" y1="100" x2="190" y2="100" stroke="blue" strokeWidth="2" />
              <circle cx="100" cy="100" r="3" fill="black" />
              <text x="105" y="60" fontSize="12" fill="red">Raio</text>
              <text x="60" y="95" fontSize="12" fill="blue">Diâmetro</text>
              <text x="90" y="115" fontSize="12" fill="black">Centro</text>
            </svg>
          </div>

          <button
            onClick={handleStart}
            className="mt-4 bg-main-blue text-white px-6 py-2 rounded hover:opacity-90"
          >
            Começar Quiz
          </button>
        </div>
      ) : (
        <QuestionAnswer questions={questions} />
      )}
    </div>
  );
};

export default CircleLevel;
