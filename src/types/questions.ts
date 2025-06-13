export interface Question {
  id:number,
  question: string,
  price: number,
  answers: Answer[]
  countOfCorrectAnswers: number,
}

export interface Answer {
  letter: string;
  text: string;
  isCorrect: boolean;
}