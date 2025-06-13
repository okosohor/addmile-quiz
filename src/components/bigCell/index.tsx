import { useGameContext } from '@/context/gameContext';
import questions from '@/data/questions.json';
import styles from '@/styles/bigCell.module.css';
import { Answer } from '@/types/questions';
import cn from 'classnames';
import { SetStateAction, useEffect, useState } from 'react';

interface Props {
  isLastOdd: boolean;
  answer: Answer;
  setSelectedAnswers: React.Dispatch<SetStateAction<Answer[]>>
  selectedAnswers: Answer[];
  countOfCorrectAnswers: number;
}


export default function Cell ({ isLastOdd, selectedAnswers, setSelectedAnswers, answer, countOfCorrectAnswers }: Props) {
  const { currentQuestionIndex, setCurrentQuestion, finishGame } = useGameContext();
  const [isAnswerFalse, setIsAnswerFalse] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const isAnswerSelected = (selectedAnswers.find(item => (item.letter === answer.letter)) && selectedAnswers.length <= countOfCorrectAnswers && countOfCorrectAnswers > 1)

  const isButtonDisabled = (!!selectedAnswers.find(item => (!item.isCorrect)) || selectedAnswers.length === countOfCorrectAnswers)

  function nextStep () {
    setCurrentQuestion(currentQuestionIndex + 1)
    setSelectedAnswers([])
    setIsAnswerCorrect(false)
  }

  function handleClick () {
    setSelectedAnswers((prev)=>[...prev, answer])
    if(answer.isCorrect) {
      setIsAnswerCorrect(true)
      if(currentQuestionIndex === questions.length - 1 ) 
      {
        setTimeout(finishGame, 2000)
      }
      if(selectedAnswers.length + 1 === countOfCorrectAnswers){
        setTimeout(nextStep, 2000)
      }
    } else {
      setIsAnswerFalse(true)
      setTimeout(finishGame, 2000)
    }
  };
  useEffect(()=>{
    setIsAnswerCorrect(false)

  },[currentQuestionIndex])

  return (
    <button disabled={isButtonDisabled} onClick={handleClick} className={cn(
      styles.cell, 
      {[styles['cell-last-odd']]: isLastOdd, 
        [styles['cell-false']]: isAnswerFalse, 
        [styles['cell-correct']]: isAnswerCorrect, 
        [styles['cell-selected']]: isAnswerSelected,
      },
    )
    }
    >
      <div className={styles['cell-line']}/>
      <div className={styles['cell-content']}>
        <div className={styles['cell-left-side']}/>
        <div className={styles['cell-right-side']}/>
        <div className={styles['cell-bg']}>
          <span className={styles.letter}>{answer.letter}</span>
          <span className={styles.text}>{answer.text}</span>
        </div>
      </div>
    </button>
  )
}