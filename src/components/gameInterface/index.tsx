import styles from '@/styles/gameInterface.module.css';
import BigCell from '../BigCell';
import questions from '@/data/questions.json';
import { SetStateAction, useState } from 'react';
import { Answer } from '@/types/questions';
import Image from 'next/image';
import cn from 'classnames';


interface Props {
  currentQuestionIndex: number
  setBurgerMenuIsOpen: React.Dispatch<SetStateAction<boolean>>;
  burgerMenuIsOpen: boolean;
}

export default function GameInterface({ currentQuestionIndex, setBurgerMenuIsOpen, burgerMenuIsOpen }: Props) {
  const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);
  
  const isOdd = questions[currentQuestionIndex].answers.length % 2 !== 0;
  const currentQuestion = questions[currentQuestionIndex];

  function handleOpenMenu () {
    setBurgerMenuIsOpen(prev=>!prev);
  }
  
  return (
    <div className={cn(styles['game-screen'], {[styles['hidden-mobile']] : burgerMenuIsOpen})}>
      <div className={styles['button-container']}>
        <button onClick={handleOpenMenu} className={styles['burger-menu-button']}>
          <Image 
            height={14} 
            width={14}
            alt='bureg menu'
            src={'/images/openMenu.svg'}
          />
        </button>
      </div>
      <p className={styles['game-question']}>{currentQuestion.question}</p>
      <div className={styles['cell-container']}>
        
        {currentQuestion.answers.map((answer, index) => (
          <BigCell
            countOfCorrectAnswers={currentQuestion.countOfCorrectAnswers}
            answer={answer} 
            key={index} 
            isLastOdd={isOdd && (index === questions[currentQuestionIndex].answers.length - 1) }
            setSelectedAnswers={setSelectedAnswers}
            selectedAnswers={selectedAnswers}
          />
        ))}
      </div>
    </div>
  );
}
