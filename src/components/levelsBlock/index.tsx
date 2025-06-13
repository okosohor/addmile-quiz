import styles from '@/styles/levelsBlock.module.css'
import Cell from '@/components/cell';
import questions from '@/data/questions.json';
import Image from 'next/image';
import { SetStateAction } from 'react';
import cn from 'classnames';

interface Props {
  currentQuestionIndex: number;
  setBurgerMenuIsOpen: React.Dispatch<SetStateAction<boolean>>;
  burgerMenuIsOpen:boolean;
}

export default function LevelsInfo({ currentQuestionIndex, setBurgerMenuIsOpen, burgerMenuIsOpen }:Props) {
  function handleClose() {
    setBurgerMenuIsOpen(false)
  }
  
  return (
    <div className={cn(styles.levels, {[styles['hidden-mobile']] : !burgerMenuIsOpen})}>
      <button onClick={handleClose} className={styles['burger-menu-button']}>
        <Image 
          width={24} 
          height={24} 
          alt='close menu'
          src={'/images/closeMenu.svg'}
        />
      </button>
      <div className={styles.container}>
        {questions.map((question, i) =>  (
          <Cell 
            index={i} 
            currentQuestionIndex={currentQuestionIndex} 
            key={question.id}
            price={question.price}
          />
        ),
        )}
      </div>
    </div>
  );
}