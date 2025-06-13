'use client';

import { QuestionAndAnswer2 } from "@/types/answer";
import QuestionAnswer from "../_components/levelQuestion";
import { Header } from "@/app/components/header";
import { useRouter } from "next/navigation";

const questions: QuestionAndAnswer2[] = [
  {
    question: "A diagonal de um quadrado divide-o em dois triângulos...",
    correctAnswer: "Retângulos isósceles.",
    incorrectAnswers: [
      "Equiláteros",
      "Escalenos",
      "Retângulos escalenos"
    ]
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
  
  return (
    <div>
      <div className="mt-4" onClick={() => router.back()}>
        <Header />
      </div>
      <QuestionAnswer questions={questions} />
    </div>
  );
};

export default SquareLevel;
