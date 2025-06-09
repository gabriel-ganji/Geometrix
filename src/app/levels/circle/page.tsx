import { QuestionAndAnswer2 } from "@/types/answer";
import QuestionAnswer from "../_components/levelQuestion";

const questions: QuestionAndAnswer2[] = [
  {
    question: "O que é um círculo?",
    correctAnswer: "Figura redonda, sem lados.",
    incorrectAnswers: ["Figura com 4 lados", "Figura com 3 lados", "Figura com 5 lados"]
  },
  {
    question: "Qual o perímetro de um círculo com raio 5 cm? (Use π ≈ 3)",
    correctAnswer: "30 cm.",
    incorrectAnswers: ["25 cm", "35 cm", "40 cm"]
  },
  {
    question: "Qual a área de um círculo com raio 2 cm? (Use π ≈ 3)",
    correctAnswer: "12 cm².",
    incorrectAnswers: ["8 cm²", "10 cm²", "15 cm²"]
  },
  {
    question: "Qual o perímetro de um círculo com raio 6 cm? (Use π ≈ 3)",
    correctAnswer: "36 cm.",
    incorrectAnswers: ["30 cm", "40 cm", "50 cm"]
  },
  {
    question: "Qual a área de um círculo com raio 4 cm? (Use π ≈ 3)",
    correctAnswer: "48 cm².",
    incorrectAnswers: ["36 cm²", "50 cm²", "42 cm²"]
  }
];

export const CircleLevel = () => {
  <QuestionAnswer questions={questions} />
}
