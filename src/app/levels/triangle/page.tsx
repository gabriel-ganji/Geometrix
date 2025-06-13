'use client';

import { QuestionAndAnswer2 } from "@/types/answer";
import QuestionAnswer from "../_components/levelQuestion";
import { Header } from "@/app/components/header";
import { useRouter } from "next/navigation";

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
  
  return (
    <div>
      <div className="mt-4" onClick={() => router.back()}>
        <Header />
      </div>
      <QuestionAnswer questions={questions} />
    </div>
  );
};

export default TriangleLevel;
