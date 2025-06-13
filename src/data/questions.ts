import { Question } from '@/types/questions';

const questions: Question[] = [
  {
    id: 1,
    question: 'How many products are included in Headway Inc.?',
    price: 100,
    countOfCorrectAnswers: 1,
    answers: [
      {
        letter: 'A',
        text: '1',
        isCorrect: false,
      },
      {
        letter: 'B',
        text: '3',
        isCorrect: false,
      },
      {
        letter: 'C',
        text: '5',
        isCorrect: true,
      },
      {
        letter: 'D',
        text: '8',
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    question: 'Which product is developed by Headway Inc.?',
    price: 300,
    countOfCorrectAnswers: 3,
    answers: [
      {
        letter: 'A',
        text: 'Impulse',
        isCorrect: true,
      },
      {
        letter: 'B',
        text: 'Headway',
        isCorrect: true,
      },
      {
        letter: 'C',
        text: 'AddMile',
        isCorrect: true,
      },
      {
        letter: 'D',
        text: 'BetterMe',
        isCorrect: false,
      },
    ],
  },  
  {
    id: 3,
    question: 'How many product & marketing A/B tests are conducted monthly at Headway Inc.?',
    price: 500,
    countOfCorrectAnswers: 1,
    answers: [
      {
        letter: 'A',
        text: '50',
        isCorrect: false,
      },
      {
        letter: 'B',
        text: '100+',
        isCorrect: true,
      },
      {
        letter: 'C',
        text: '150+',
        isCorrect: false,
      },
      {
        letter: 'D',
        text: '200+',
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,
    question: 'What is the name of Headway Inc.\'s first product?',
    price: 1000,
    countOfCorrectAnswers: 1,
    answers: [
      {
        letter: 'A',
        text: 'Impulse',
        isCorrect: false,
      },
      {
        letter: 'B',
        text: 'Headway',
        isCorrect: true,
      },
      {
        letter: 'C',
        text: 'AddMile',
        isCorrect: false,
      },
      {
        letter: 'D',
        text: 'Nibble',
        isCorrect: false,
      },
      {
        letter: 'E',
        text: 'Skillsta',
        isCorrect: false,
      },
    ],
  },
];

export default questions;