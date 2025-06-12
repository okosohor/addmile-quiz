export interface Level {
  question: string,
  price: number,
  answers: Answer[]
}

interface Answer {
  letter: string;
  text: string;
  isCorrect: boolean;
}