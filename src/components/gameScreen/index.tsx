import styles from '@/styles/gameScreen.module.css'
import ScreenContent from '../contentScreen'
import LevelsInfo from '../levelsBlock'

export default function GameScreen () {
  const isGameFinished = false
  return (
    <div className={styles.page}>
      {isGameFinished ? 
        <ScreenContent/>
        :
        <div className={styles.container}>
          <div className={styles['game-screen']}>
            <p className={styles['game-question']}>Question</p>
            <div className={styles['cell-container']}>

            </div>
          </div>
          <LevelsInfo/>
        </div>
      }
    </div>
  )
}