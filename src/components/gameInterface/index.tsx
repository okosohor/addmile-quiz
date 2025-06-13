import styles from '@/styles/gameInterface.module.css'
import BigCell from '../bigCell';
import questions from '@/data/questions';
import { useState } from 'react';
import { Answer } from '@/types/questions';

const mock = [
  {
    id:1,
    letter: 'a',
    text: 'asdasdasd',
  },
  {
    id:2,
    letter: 'b',
    text: 'asdasdasd',
  },
  {
    id:3,
    letter: 'c',
    text: 'asdasdasd',
  },
  {
    id:4,
    letter: 'd',
    text: 'asdasdasd',
  },

  {
    id:5,
    letter: 'g',
    text: 'asdasdasd',
  },
]

interface Props {
  currentQuestionIndex: number
}

export default function GameInterface({ currentQuestionIndex }: Props) {
  const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([])
  
  const isOdd = mock.length % 2 !== 0;
  const currentQuestion = questions[currentQuestionIndex]
  

  return (
    <div className={styles['game-screen']}>
      <p className={styles['game-question']}>{currentQuestion.question}</p>
      <div className={styles['cell-container']}>
        
        {currentQuestion.answers.map((answer, index) => (
          <BigCell
            countOfCorrectAnswers={currentQuestion.countOfCorrectAnswers}
            answer={answer} 
            key={index} 
            isLastOdd={isOdd && index === mock.length - 1}
            setSelectedAnswers={setSelectedAnswers}
            selectedAnswers={selectedAnswers}
          />
        ))}
      </div>
    </div>
  );
}
