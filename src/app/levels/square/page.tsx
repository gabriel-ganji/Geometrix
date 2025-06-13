'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { QuestionAndAnswer2 } from "@/types/answer";
import QuestionAnswer from "../_components/levelQuestion";
import { Header } from "@/app/components/header";

const questions: QuestionAndAnswer2[] = [
  {
    question: "A diagonal de um quadrado divide-o em dois triângulos...",
    correctAnswer: "Retângulos isósceles.",
    incorrectAnswers: ["Equiláteros", "Escalenos", "Retângulos escalenos"]
  },
  {
    question: "Se a área de um quadrado é 64 cm², qual é o comprimento da diagonal? (Use √2 ≈ 1,41)",
    correctAnswer: "11,3 cm.",
    incorrectAnswers: ["10 cm", "8 cm", "12,5 cm"]
  },
  {
    question: "Um quadrado tem perímetro 36 cm. Qual é sua área?",
    correctAnswer: "81 cm².",
    incorrectAnswers: ["36 cm²", "64 cm²", "72 cm²"]
  },
  {
    question: "Qual a medida da diagonal de um quadrado com lado 10 cm? (Use √2 ≈ 1,41)",
    correctAnswer: "14,1 cm.",
    incorrectAnswers: ["10 cm", "12 cm", "16 cm"]
  },
  {
    question: "Qual alternativa é **sempre verdadeira** para um quadrado?",
    correctAnswer: "Possui eixos de simetria nas diagonais e nos lados.",
    incorrectAnswers: [
      "Seus lados opostos são perpendiculares",
      "Sua área é igual ao perímetro",
      "A soma das diagonais é igual ao lado vezes 4"
    ]
  }
];

const SquareLevel = () => {
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
          <h2 className="text-2xl font-bold mb-4">Entendendo os Quadrados</h2>
          <p className="mb-2">
            Um <strong>quadrado</strong> é um polígono com <strong>quatro lados iguais</strong> e <strong>quatro ângulos retos (90°)</strong>.
          </p>
          <p className="mb-2">
            A <strong>área</strong> de um quadrado é dada por:
            <br />
            <code>Área = lado × lado</code>
          </p>
          <p className="mb-2">
            O <strong>perímetro</strong> é:
            <br />
            <code>Perímetro = 4 × lado</code>
          </p>
          <p className="mb-2">
            A <strong>diagonal</strong> pode ser calculada por:
            <br />
            <code>Diagonal = lado × √2</code>
          </p>

          {/* SVG ilustrativo */}
          <div className="my-6 flex justify-center">
            <svg width="200" height="200" viewBox="0 0 200 200">
              <rect x="20" y="20" width="160" height="160" fill="#f0f9ff" stroke="black" strokeWidth="2" />
              <line x1="20" y1="20" x2="180" y2="180" stroke="red" strokeWidth="2" />
              <line x1="20" y1="180" x2="180" y2="20" stroke="red" strokeWidth="2" />
              <text x="90" y="110" fontSize="12" fill="red">Diagonal</text>
              <text x="100" y="18" fontSize="12" fill="black">Lado</text>
              <line x1="20" y1="20" x2="180" y2="20" stroke="blue" strokeWidth="2" />
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

export default SquareLevel;
