import styles from '@/styles/gameScreen.module.css'
import ScreenContent from '../contentScreen'
import LevelsInfo from '../levelsBlock'
import GameInterface from '../gameInterface'
import { useGameContext } from '@/context/gameContext'
import { useState } from 'react'

export default function GameScreen () {
  const { currentQuestionIndex, isGameFinished } = useGameContext()
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false)
  return (
    <div className={styles.page}>
      {isGameFinished ? 
        <ScreenContent/>
        :
        <div className={styles.container}>
          <GameInterface burgerMenuIsOpen={burgerMenuIsOpen} setBurgerMenuIsOpen={setBurgerMenuIsOpen} currentQuestionIndex={currentQuestionIndex} />
          <LevelsInfo burgerMenuIsOpen={burgerMenuIsOpen} setBurgerMenuIsOpen={setBurgerMenuIsOpen} currentQuestionIndex={currentQuestionIndex}/>
        </div>
      }
    </div>
  )
}