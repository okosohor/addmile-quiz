import { Level } from '@/types/level';

const levels: Level[] = [
  {
    question: 'How many products are included in Headway Inc.?',
    price: 100,
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
    question: 'What is the name of Headway Inc.\'s first product?',
    price: 200,
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
    ],
  },
];

export default levels;