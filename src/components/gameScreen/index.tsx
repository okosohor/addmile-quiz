import styles from '@/styles/gameScreen.module.css'
import ScreenContent from '../contentScreen'
import LevelsInfo from '../levelsBlock'
import GameInterface from '../gameInterface'
import { useGameContext } from '@/context/gameContext'

export default function GameScreen () {
  const { currentQuestionIndex, isGameFinished } = useGameContext()
  return (
    <div className={styles.page}>
      {isGameFinished ? 
        <ScreenContent/>
        :
        <div className={styles.container}>
          {/* <div className={styles['game-screen']}>
            <p className={styles['game-question']}>Question</p>
            <div className={styles['cell-container']}>

            </div>
          </div> */}
          <GameInterface currentQuestionIndex={currentQuestionIndex} />
          <LevelsInfo currentQuestionIndex={currentQuestionIndex}/>
        </div>
      }
    </div>
  )
}