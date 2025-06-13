'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { QuestionAndAnswer2 } from "@/types/answer";
import QuestionAnswer from "../_components/levelQuestion";
import { Header } from "@/app/components/header";

const questions: QuestionAndAnswer2[] = [
  {
    question: "O que define um triângulo?",
    correctAnswer: "Figura com 3 lados e 3 ângulos.",
    incorrectAnswers: [
      "Figura com 4 lados",
      "Figura com lados curvos",
      "Figura com lados iguais a um círculo"
    ]
  },
  {
    question: "Qual é a soma dos ângulos internos de qualquer triângulo?",
    correctAnswer: "180°.",
    incorrectAnswers: ["360°", "90°", "270°"]
  },
  {
    question: "Se um triângulo tem lados de 3 cm, 4 cm e 5 cm, ele é...",
    correctAnswer: "Retângulo.",
    incorrectAnswers: ["Equilátero", "Isósceles", "Obtusângulo"]
  },
  {
    question: "Qual a área de um triângulo com base 8 cm e altura 5 cm?",
    correctAnswer: "20 cm².",
    incorrectAnswers: ["40 cm²", "13 cm²", "30 cm²"]
  },
  {
    question: "Qual é a característica de um triângulo equilátero?",
    correctAnswer: "Todos os lados e ângulos são iguais.",
    incorrectAnswers: [
      "Possui um ângulo de 90°",
      "Tem dois lados iguais",
      "Tem lados desiguais"
    ]
  },
  {
    question: "O que é necessário para formar um triângulo?",
    correctAnswer: "A soma de dois lados deve ser maior que o terceiro.",
    incorrectAnswers: [
      "Todos os lados devem ser iguais",
      "A diferença de dois lados deve ser menor que o terceiro",
      "Pelo menos um ângulo de 90°"
    ]
  },
  {
    question: "Se a base de um triângulo é 10 cm e a área é 30 cm², qual é a altura?",
    correctAnswer: "6 cm.",
    incorrectAnswers: ["3 cm", "5 cm", "8 cm"]
  }
];

const TriangleLevel = () => {
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
          <h2 className="text-2xl font-bold mb-4">Entendendo os Triângulos</h2>
          <p className="mb-2">
            Um <strong>triângulo</strong> é uma figura geométrica com <strong>três lados</strong> e <strong>três ângulos internos</strong>.
          </p>
          <p className="mb-2">
            A soma dos ângulos internos de qualquer triângulo é sempre <strong>180°</strong>.
          </p>
          <p className="mb-2">
            A <strong>área</strong> de um triângulo é dada por:
            <br />
            <code>Área = (base × altura) / 2</code>
          </p>
          <p className="mb-2">
            Os tipos mais comuns são:
            <ul className="list-disc list-inside">
              <li>Equilátero – 3 lados e ângulos iguais</li>
              <li>Isósceles – 2 lados iguais</li>
              <li>Escaleno – 3 lados diferentes</li>
              <li>Retângulo – um ângulo de 90°</li>
            </ul>
          </p>

          {/* SVG ilustrativo */}
          <div className="my-6 flex justify-center">
            <svg width="240" height="200" viewBox="0 0 240 200">
              <polygon points="40,160 200,160 120,40" fill="#dbeafe" stroke="black" strokeWidth="2" />
              <line x1="120" y1="40" x2="120" y2="160" stroke="red" strokeDasharray="5,5" strokeWidth="2" />
              <text x="115" y="30" fontSize="12" fill="black">Vértice</text>
              <text x="60" y="170" fontSize="12" fill="black">Base</text>
              <text x="125" y="100" fontSize="12" fill="red">Altura</text>
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

export default TriangleLevel;
